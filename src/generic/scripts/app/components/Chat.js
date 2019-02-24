import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import MessageComposer from './MessageComposer'
import MessageListItem from './MessageListItem'
import Channels from './Channels'
import * as actions from '../actions/actions'
import * as authActions from '../actions/authActions'
import TypingListItem from './TypingListItem'
// import { Navbar, NavDropdown, Nav, NavItem } from 'react-bootstrap'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Drawer from '@material-ui/core/Drawer'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default class Chat extends Component {

  static propTypes = {
    messages: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    channels: PropTypes.array.isRequired,
    activeChannel: PropTypes.string.isRequired,
    typers: PropTypes.array.isRequired,
    socket: PropTypes.object.isRequired
  }
  constructor(props, context) {
    super(props, context)
    this.state = {
      privateChannelModal: false,
      targetedUser: '',
      userMenuOpen: false,
      anchorEl: null,
    }
  }
  componentDidMount() {
    const { socket, user, dispatch } = this.props
    socket.emit('chat mounted', user)
    socket.on('new bc message', msg =>
      dispatch(actions.receiveRawMessage(msg))
    )
    socket.on('typing bc', user =>
      dispatch(actions.typing(user))
    )
    socket.on('stop typing bc', user =>
      dispatch(actions.stopTyping(user))
    )
    socket.on('new channel', channel =>
      dispatch(actions.receiveRawChannel(channel))
    )
    socket.on('receive socket', socketID =>
      dispatch(authActions.receiveSocket(socketID))
    )
    socket.on('receive private channel', channel =>
      dispatch(actions.receiveRawChannel(channel))
    )
  }
  componentDidUpdate() {
    const messageList = this.refs.messageList
    messageList.scrollTop = messageList.scrollHeight
  }
  handleSave(newMessage) {
    const { dispatch } = this.props
    if (newMessage.text.length !== 0) {
      dispatch(actions.createMessage(newMessage))
    }
  }
  handleSignOut() {
    const { dispatch } = this.props
    dispatch(authActions.signOut())
    this.handleCloseUserMenu()
    this.setState({ username: '', redirect: true })
  }
  changeActiveChannel(channel) {
    const { socket, activeChannel, dispatch } = this.props
    socket.emit('leave channel', activeChannel)
    socket.emit('join channel', channel)
    dispatch(actions.changeChannel(channel))
    dispatch(actions.fetchMessages(channel.name))
  }
  handleClickOnUser(user) {
    this.setState({ privateChannelModal: true, targetedUser: user })
  }
  closePrivateChannelModal(event) {
    event.preventDefault()
    this.setState({privateChannelModal: false})
  }
  handleSendDirectMessage() {
    const { dispatch, socket, channels, user } = this.props
    const doesPrivateChannelExist = channels.filter(item => {
      return item.name === (`${this.state.targetedUser.username}+${user.username}` || `${user.username}+${this.state.targetedUser.username}`)
    })
    if (user.username !== this.state.targetedUser.username && doesPrivateChannelExist.length === 0) {
      const newChannel = {
        name: `${this.state.targetedUser.username}+${user.username}`,
        id: Date.now(),
        private: true,
        between: [this.state.targetedUser.username, user.username]
      }
      dispatch(actions.createChannel(newChannel))
      this.changeActiveChannel(newChannel)
      socket.emit('new private channel', this.state.targetedUser.socketID, newChannel)
    }
    if(doesPrivateChannelExist.length > 0) {
      this.changeActiveChannel(doesPrivateChannelExist[0])
    }
    this.setState({ privateChannelModal: false, targetedUser: '' })
  }
  toggleUserMenu() {
    this.setState({
      userMenuOpen: !this.state.userMenuOpen
    });
  }
  handleClickUserMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }
  handleCloseUserMenu = () => {
    this.setState({ anchorEl: null })
  }
  render() {
    if (this.state.redirect) {
      return <Redirect push to="/welcome" />
    }
    const { messages, socket, channels, activeChannel, typers, dispatch, user, screenWidth} = this.props
    const filteredMessages = messages.filter(message => message.channelID === activeChannel)
    const username = this.props.username //this.props.user.username
    console.log("-||- this.props:", this.props)
    const userMenu = (
      <div>
        <Button
          aria-owns={this.state.anchorEl ? 'user-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClickUserMenu}
        >
          {username}
        </Button>
        <Menu
          id="user-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleCloseUserMenu}
        >
          <MenuItem onClick={this.handleCloseUserMenu}>My Profile</MenuItem>
          <MenuItem onClick={this.handleCloseUserMenu}>My Account</MenuItem>
          <MenuItem onClick={::this.handleSignOut}>Sign Out</MenuItem>
        </Menu>
      </div>
    )
    const PrivateMessageModal = (
      <Dialog key={1} open={this.state.privateChannelModal} onClose={::this.closePrivateChannelModal} aria-labelledby="simple-dialog-title-user">
        <DialogTitle id="simple-dialog-title-user">{this.state.targetedUser.username}</DialogTitle>
        <DialogContent>
          <Button color="primary" onClick={::this.handleSendDirectMessage}>
            Direct Message
          </Button>
          <DialogActions>
            <Button color="secondary" onClick={::this.closePrivateChannelModal}>
              Close
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    )
    const mobileNav = (
      <div className="nav">
          <span style={{fontSize: '2em'}}>{username}</span>
          <Button color="secondary" onClick={::this.handleSignOut}>Sign out</Button>
          <section style={{order: '2', marginTop: '1.5em'}}>
            <Channels socket={socket} onClick={::this.changeActiveChannel} channels={channels} messages={messages} dispatch={dispatch} />
          </section>
      </div>
    )
    const bigNav = (
      <div className="nav">
        {userMenu}
        <section style={{order: '2', marginTop: '1.5em'}}>
          <Channels socket={socket} onClick={::this.changeActiveChannel} channels={channels} messages={messages} dispatch={dispatch} />
        </section>
      </div>
    )
    return (
      <div style={{margin: '0', padding: '0', height: '100%', width: '100%', display: '-webkit-box'}}>
        {screenWidth < 0 ? mobileNav : bigNav }
        <div className="main">
          <header style={{flexGrow: '0', order: '0', fontSize: '2.3em', paddingLeft: '0.2em'}}>
            <div>
              {activeChannel}
            </div>
          </header>
          {PrivateMessageModal}
          <ul style={{wordWrap: 'break-word', margin: '0', overflowY: 'auto', padding: '0', paddingBottom: '1em', flexGrow: '1', order: '1'}} ref="messageList">
            {filteredMessages.map(message =>
              <MessageListItem handleClickOnUser={::this.handleClickOnUser} message={message} key={message.id} />
            )}
          </ul>
          <MessageComposer socket={socket} activeChannel={activeChannel} user={user} onSave={::this.handleSave} />
        </div>
        <footer style={{fontSize: '1em', border: '1px solid red', height: '2em', position: 'fixed', bottom: '0.2em', left: '21.5rem', color: '#000000', width: '100%', opacity: '1.0'}}>
          {typers.length === 1 &&
            <div>
              <span>
                <TypingListItem username={typers[0]} key={1}/>
                <span> is typing</span>
              </span>
            </div>}
          {typers.length === 2 &&
          <div>
            <span>
              <TypingListItem username={typers[0]} key={1}/>
              <span> and </span>
              <TypingListItem username={typers[1]} key={2}/>
              <span> are typing</span>
            </span>
          </div>}
          {typers.length > 2 &&
          <div>
            <span>Several people are typing</span>
          </div>}
        </footer>
      </div>
    )
  }
}
