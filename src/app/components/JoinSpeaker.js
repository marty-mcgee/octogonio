import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

class JoinSpeaker extends Component {

    constructor(props) {
        super(props)
        
        // this.state = {
        //     status: 'disconnected',
        //     title: '',
        //     shareID: '',
        //     presetID: 'meshuggah'
        // }

        // this.connect = this.connect.bind(this)
        // this.disconnect = this.disconnect.bind(this)
        // this.welcome = this.welcome.bind(this)
        this.start = this.start.bind(this)

        console.log("== [MM] JoinSpeaker Component constructor loaded: this.start ==")
        console.log(this.start)
        console.log("== [MM] end ==")
    }

    start() {
        var speakerName = ReactDOM.findDOMNode(this.refs.name).value
        var title = ReactDOM.findDOMNode(this.refs.title).value
        this.props.emit('start', { name: speakerName, title: title })
        console.log("== [MM] start: this.props ==")
        console.log(this.props)
        console.log("== [MM] end ==")
    }

    render() {
        return(
            <form action="javascript:void(0)" onSubmit={this.start}>

                <label>Full Name</label>
                <input ref="name"
                    className="form-control"
                    placeholder="enter your full name.."
                    required />
                <label>Room Title</label>
                <input ref="title"
                    className="form-control"
                    placeholder="enter a room name.."
                    required />
                <button className="btn btn-primary">Join</button>

            </form>
        )
    }
}

export default JoinSpeaker