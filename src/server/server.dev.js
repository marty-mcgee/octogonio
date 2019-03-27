'use strict'

import express from 'express'
import path from 'path'
import _ from 'underscore'
import mongoose from 'mongoose'
import cors from 'cors'
import passport from 'passport'
require('../../config/passport')(passport)
import SocketIo from 'socket.io'

// const app = express()
// [MM] polling
const app1 = express()

// set env vars
process.env.MONGOLAB_URI = process.env.MONGOLAB_URI || 'mongodb://localhost/chat_dev'
process.env.PORT = process.env.PORT || 9000
// connect our DB
mongoose.connect(process.env.MONGOLAB_URI)
process.on('uncaughtException', function (err) {
	console.log(err)
})
console.log(
	`
	===
	[MM] CONNECTED TO DB
	===
	`
)

app1.use(cors())
app1.use(passport.initialize())

// [MM] polling
var connections = []
var title = 'Untitled Room'
var audience = []
var speaker = {}
var questions = require('../generic/scripts/app/utils/questions')
var currentQuestion = false
var results = {
	a: 0,
	b: 0,
	c: 0,
	d: 0,
}

// load routers
const messageRouter = express.Router()
const usersRouter = express.Router()
const channelRouter = express.Router()
require('./routes/message_routes')(messageRouter)
require('./routes/channel_routes')(channelRouter)
require('./routes/user_routes')(usersRouter, passport)
app1.use('/api', messageRouter)
app1.use('/api', usersRouter)
app1.use('/api', channelRouter)

app1.use(express.static('./www'))
//app1.use(express.static('./node_modules/bootstrap/dist'))
app1.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, '../../www/index.html'), function(err) {
		if (err) {
			res.status(500).send(err)
		}
	})
})
const server1 = app1.listen(3003, 'localhost', function(err) {
	if (err) {
		console.log(err)
		return
	}
	console.log('server listening on port: %s', 3003)
})

//const ioServer = require('socket.io').listen(server1)
//const ioServer = new SocketIo(server1, {path: '/'})

const ioServer2 = new SocketIo(server1, {path: '/api/chat'})
//const socketEvents = require('./socketEvents')(ioServer2)

//console.log("SocketIo ioServer2", ioServer2)

ioServer2.sockets.on('connection', function(socket) {

  //console.log("connection socket", socket)

	socket.join('Lobby')
	socket.on('chat mounted', function(user) {
		// TODO: Does the server need to know the user?
		socket.emit('receive socket', socket.id)
	})
	socket.on('leave channel', function(channel) {
		socket.leave(channel)
	})
	socket.on('join channel', function(channel) {
		socket.join(channel.name)
	})
	socket.on('new message', function(msg) {
		socket.broadcast.to(msg.channelID).emit('new bc message', msg)
	})
	socket.on('new channel', function(channel) {
		socket.broadcast.emit('new channel', channel)
	})
	socket.on('typing', function (data) {
		socket.broadcast.to(data.channel).emit('typing bc', data.user)
	})
	socket.on('stop typing', function (data) {
		socket.broadcast.to(data.channel).emit('stop typing bc', data.user)
	})
	socket.on('new private channel', function(socketID, channel) {
		socket.broadcast.to(socketID).emit('receive private channel', channel)
	})


	// when a member leaves
	socket.once('disconnect', function() {

		// find and remove member from audience array
		var member = _.findWhere(audience, { 
		  id: this.id
		})
		// handle leaving member
		if (member) {
      audience.splice(audience.indexOf(member), 1)
      // broadcast new audience array
      ioServer2.sockets.emit('audience', audience)
      console.log("ioServer2 audience disconnected: %s (%s remaining)", member.name, audience.length)
		} 
		// handle leaving speaker
		else if (this.id === speaker.id) {
      console.log("ioServer speaker has left: %s. Room '%s' is over.", speaker.name, title)
      speaker = {}
      title = "Another Untitled Room"
      ioServer2.sockets.emit('end', { title: title, speaker: {} })
		}

		// remove socket from our connections array
		connections.splice(connections.indexOf(socket), 1)

		// finally, disconnect from socket io
		socket.disconnect()
		console.log("ioServer2 socket disconnected: %s sockets remaining", connections.length)
	})

	// when a member joins
	socket.on('join', function(payload) {
		var newMember = {
      id: this.id,
      name: payload.name,
      type: 'member'
		}
		this.emit('joined', newMember)
		// add new member to the audience array
		audience.push(newMember)
		// broadcast to all sockets the new audience array
		ioServer2.sockets.emit('audience', audience)
		console.log("ioServer2 socket audience joined: %s", payload.name)
	})

	// when a speaker (member.type) joins
	socket.on('start', function(payload) {
		speaker.id = this.id
		speaker.name = payload.name
		speaker.type = 'speaker'
		title = payload.title
		this.emit('joined', speaker)
		// broadcast to all sockets the speaker object and room title
		ioServer2.sockets.emit('start', { title: title, speaker: speaker })
		console.log("ioServer2 room started: '%s' by %s", title, speaker.name)
	})

	socket.on('ask', function(question) {
		currentQuestion = question
		results = {a: 0, b: 0, c: 0, d: 0}
		ioServer2.sockets.emit('ask', currentQuestion)
		console.log("ioServer2 question asked: '%s'", question.q)
	})

	socket.on('answer', function(payload) {
		results[payload.choice]++
		ioServer2.sockets.emit('results', results)
		console.log("Answer: '%s' - %j", payload.choice, results)
	})

	// emit a function with data
	socket.emit('welcome', {
		title: title,
		audience: audience,
		speaker: speaker,
		questions: questions,
		currentQuestion: currentQuestion,
		results: results
	})

	connections.push(socket)
	console.log("ioServer2 socket connected: %s", socket.id)
	console.log("ioServer2 socket connections: %s", connections.length)
	//console.log("ioServer2 socket connections: %s", connections)
})

console.log("Polling server is running at 'http://localhost:3003'")
