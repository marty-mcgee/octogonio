import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChannelListItem from './ChannelListItem'
import ChannelListModalItem from './ChannelListModalItem'
import { Glyphicon, Form, FormGroup, FormControl } from 'react-bootstrap' // Input
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import * as actions from '../actions/actions'
import uuid from 'node-uuid'

export default class Channels extends Component {

  static propTypes = {
    channels: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }
  constructor(props, context) {
    super(props, context)
    this.state = {
      addChannelModal: false,
      channelName: '',
      moreChannelsModal: false,
      // modal: false
    }
    //this.toggle = this.toggle.bind(this)
  }
  handleChangeChannel(channel) {
    if(this.state.moreChannelsModal) {
      this.closeMoreChannelsModal()
    }
    this.props.onClick(channel)
  }
  openAddChannelModal(event) {
    event.preventDefault()
    //this.setState({addChannelModal: true})
    this.setState(prevState => ({
      addChannelModal: !prevState.addChannelModal
    }))
    console.log("event", event)
  }
  closeAddChannelModal(event) {
    try { 
      event.preventDefault()
    } catch (e) {
      console.log(e)
    }
    this.setState({addChannelModal: false})
  }
  handleModalChange(event) {
    this.setState({channelName: event.target.value})
  }
  handleModalSubmit(event) {
    const { channels, dispatch, socket } = this.props
    event.preventDefault()
    if (this.state.channelName.length < 1) {
      this.refs.channelName.getInputDOMNode().focus()
    }
    console.log("-||- this.state", this.state)
    if (this.state.channelName.length > 0 && channels.filter(channel => {
      return channel.name === this.state.channelName.trim()
    }).length < 1) {
      const newChannel = {
        name: this.state.channelName.trim(),
        id: `${Date.now()}${uuid.v4()}`,
        private: false
      }
      dispatch(actions.createChannel(newChannel))
      this.handleChangeChannel(newChannel)
      socket.emit('new channel', newChannel)
      this.setState({channelName: ''})
      this.closeAddChannelModal()
    }
  }
  validateChannelName() {
    const { channels } = this.props
    if (channels.filter(channel => {
      return channel.name === this.state.channelName.trim()
    }).length > 0) {
      return 'error'
    }
    return 'success'
  }
  openMoreChannelsModal(event) {
    event.preventDefault()
    this.setState({moreChannelsModal: true})
  }
  closeMoreChannelsModal(event) {
    //event.preventDefault()
    this.setState({moreChannelsModal: false})
  }
  createChannelWithinModal() {
    this.closeMoreChannelsModal()
    this.openAddChannelModal()
  }
  // toggle() {
  //   console.log("modal clicked")
  //   this.setState(prevState => ({
  //     modal: !prevState.modal
  //   }), () => {
  //     console.log("modal state", this.state.modal)
  //   })
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.channels !== nextProps.channels) {
  //     console.log("HEY HEY HEY CHANNELS")
  //     return true
  //   }
  //   if (this.props.messages !== nextProps.messages) {
  //     console.log("HEY HEY HEY MESSAGES")
  //     return true
  //   }
  //   console.log("HEY HEY HEY FALSE")
  //   return true
  // }
  render() {
    const { channels, messages } = this.props
    const filteredChannels = channels.slice(0, 8)
    const moreChannelsBoolean = channels.length > 8
    const restOfTheChannels = channels.slice(8)
    const newChannelModal = (
      <Dialog key={1} open={this.state.addChannelModal} onClose={::this.closeAddChannelModal} aria-labelledby="simple-dialog-title">
        <DialogTitle id="simple-dialog-title">Add New Channel</DialogTitle>
        <DialogContent>
          <Form onSubmit={::this.handleModalSubmit} >
            <FormControl
              ref="channelName"
              type="text"
              help={this.validateChannelName() === 'error' ? 'A channel with that name already exists!' : undefined}
              bsStyle={this.validateChannelName()}
              name="channelName"
              autoFocus={true}
              placeholder="Enter the channel name"
              value={this.state.channelName}
              onChange={::this.handleModalChange}
            />
          </Form>
          <DialogActions>
            <Button onClick={::this.closeAddChannelModal}>Cancel</Button>
            <Button disabled={this.validateChannelName() === 'error' && 'true'} onClick={::this.handleModalSubmit} type="submit">
              Create Channel
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    )
    const moreChannelsModal = (
      <div style={{background: 'grey'}}>
        <Dialog key={2} open={this.state.moreChannelsModal} onClose={::this.closeMoreChannelsModal} aria-labelledby="simple-dialog-title-more">
          <DialogTitle id="simple-dialog-title-more">More Channels</DialogTitle>
          <DialogContent>
            <a onClick={::this.createChannelWithinModal} style={{'cursor': 'pointer', 'color': '#85BBE9'}}>
              Create a channel
            </a>
            <ul style={{height: 'auto', margin: '0', overflowY: 'auto', padding: '0'}}>
              {restOfTheChannels.map(channel =>
                <ChannelListModalItem channel={channel} key={channel.id} onClick={::this.handleChangeChannel} />
                )}
            </ul>
          </DialogContent>
          <DialogActions>
            <Button onClick={::this.closeMoreChannelsModal}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
    return (
      <section>
        <div>
          <span style={{paddingLeft: '0.8em', fontSize: '1.5em'}}>
            Channels
            <Button onClick={::this.openAddChannelModal} style={{fontSize: '0.8em', 'background': 'transparent', marginLeft: '2.8em', 'backgroundRepeat': 'noRepeat', 'border': 'none', 'cursor': 'pointer', 'overflow': 'hidden', 'outline': 'none'}}>
              +
            </Button>
          </span>
        </div>
        {newChannelModal}
        <div>
          <ul style={{display: 'flex', flexDirection: 'column', listStyle: 'none', margin: '0', overflowY: 'auto', padding: '0'}}>
            {filteredChannels.map(channel =>
              <ChannelListItem style={{paddingLeft: '0.8em', height: '0.7em'}} messageCount={messages.filter(msg => {
                return msg.channelID === channel.name
              }).length} channel={channel} key={channel.id} onClick={::this.handleChangeChannel} />
              )}
          </ul>
          {moreChannelsBoolean && <a onClick={::this.openMoreChannelsModal} style={{'cursor': 'pointer', 'color': '#85BBE9'}}> + {channels.length - 8} more...</a>}
          {moreChannelsModal}
        </div>
      </section>
    )
  }
}
