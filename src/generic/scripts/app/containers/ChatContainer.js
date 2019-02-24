import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as actions from '../actions/actions'
import {receiveAuth} from '../actions/authActions'
import Chat from '../components/Chat'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import io from 'socket.io-client'

const socket = io('', { path: '/api/chat' })
console.log("socket", socket)
const initialChannel = 'Lobby' 
// NOTE: I hard coded this value for my example. Change this as you see fit

class ChatContainer extends Component {
  componentDidMount() {
    const { dispatch, user } = this.props
    if(!user.username) {
      dispatch(receiveAuth())
    }
    dispatch(actions.fetchMessages(initialChannel))
    dispatch(actions.fetchChannels(user.username))
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.channels !== nextProps.channels) {
  //     console.log("YO YO YO CHANNELS")
  //     return true
  //   }
  //   if (this.props.messages !== nextProps.messages) {
  //     console.log("YO YO YO MESSAGES")
  //     return true
  //   }
  //   console.log("YO YO YO FALSE")
  //   return false
  // }
  render() {
    return (
      <Chat {...this.props} socket={socket} />
    )
  }
}
ChatContainer.propTypes = {
  messages: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  channels: PropTypes.array.isRequired,
  activeChannel: PropTypes.string.isRequired,
  typers: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
      messages: state.messages.data,
      channels: state.channels.data,
      activeChannel: state.activeChannel.name,
      user: state.auth.user,
      typers: state.typers,
      screenWidth: state.environment.screenWidth
  }
}
export default connect(mapStateToProps)(ChatContainer)
