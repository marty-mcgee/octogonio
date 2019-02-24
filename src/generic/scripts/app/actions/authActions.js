import * as types from '../constants/ActionTypes'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()
//import { withRouter } from 'react-router-dom'
import fetch from 'isomorphic-fetch'
//import { Cookies } from 'react-cookie'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

export function receiveAuth() {
  const user = cookies.get('username')
  return {
    type: types.AUTH_LOAD_SUCCESS,
    user
  }
}

export function checkAuth() {
  if (cookies.get('username')) {
    return true
  }
  return false
}

function requestSignUp() {
  return {
    type: types.AUTH_SIGNUP
  }
}

function receiveUser(username) {
  const newUser = {
    name: username,
    id: Symbol(username)
  }
  return {
    type: types.AUTH_SIGNUP_SUCCESS,
    newUser
  }
}

function requestSignOut() {
  return {
    type: types.AUTH_SIGNOUT
  }
}
function receiveSignOut() {
  return {
    type: types.AUTH_SIGNOUT_SUCCESS
  }
}

export function signOut() {
  return dispatch => {
    dispatch(requestSignOut())
    return fetch('/api/signout')
      .then(response => {
        if(response.ok) {
          cookies.remove('username')
          dispatch(receiveSignOut())
          history.push('/')
          history.go()
        }
      })
      .catch(error => {throw error})
  }
}

export function signUp(user) {
  return dispatch => {
    dispatch(requestSignUp())
    return fetch('/api/sign_up', {
      method: 'post',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
      })
      .then(response => {
        if(response.ok) {
          cookies.set('username', user.username)
          dispatch(receiveUser(user.username))
          history.push('/chat')
          history.go()
        }
      })
      .catch(error => {throw error})
  }
}

function requestSignIn() {
  return {
    type: types.AUTH_SIGNIN
  }
}

function receiveSignIn(username) {
  const user = {
    name: username,
    id: Symbol(username)
  }
  return {
    type: types.AUTH_SIGNIN_SUCCESS,
    user
  }
}

export function signIn(user) {
  console.log("history", history)
  return dispatch => {
    dispatch(requestSignIn())
     return fetch('/api/sign_in', {
      method: 'post',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
      })
      .then(response => {
        if(response.ok) {
          cookies.set('username', user.username)
          dispatch(receiveSignIn(user.username))
          history.push('/chat')
          history.go()
        }
      })
      .catch(error => {throw error})
  }
}

export function receiveSocket(socketID) {
  return {
    type: types.RECEIVE_SOCKET,
    socketID
  }
}
