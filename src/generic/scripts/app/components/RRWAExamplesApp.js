import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from 'react-redux-webaudio'
import { startCtxUI, closeCtxUI, susResAudioCtx } from '../actions/rrwa'
const { emit } = actionCreators


/**
 * This is an audio event that will be handled by `react-redux-webaudio`.
 * @param {AudioContext} audioCtx - A Reference to an instance of the global AudioContext.
 * @param {() => number} [getCurrentTime] - A function that returns the current value of AudioContext.currentTime.
 */
const start = (audioCtx, getCurrentTime) => {
  // create Oscillator and gain node
  let oscillator = audioCtx.createOscillator()
  let gainNode = audioCtx.createGain()

  // connect oscillator to gain node to speakers
  oscillator.connect(gainNode)
  gainNode.connect(audioCtx.destination)

  // Make noise, sweet noise
  oscillator.type = 'square'
  oscillator.frequency.value = 200 // value in hertz
  oscillator.start(getCurrentTime())

  gainNode.gain.value = 0.1
}

/** Another audio event. */
const susRes = (audioCtx) => {
  if (audioCtx.state === 'running') {
    audioCtx.suspend()
  } else if (audioCtx.state === 'suspended') {
    audioCtx.resume()
  }
}

/** Another audio event. */
const close = (audioCtx) => audioCtx.close()


/** React Component */
class RRWAExamplesApp extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      closed: false,
      oscCount: 0
    }
  }

  handleCreate = () => {
    console.log("DOES THIS EVER FIRE?", this.state)
    this.props.start()
    this.setState({ oscCount: this.state.oscCount + 1 })
  }

  handleKill = () => {
    this.props.close()
    this.setState({ closed: true })
  }

  render() {
    const { oscCount } = this.state
    const { msg, susResToggle } = this.props.rrwa

    return (
      <div className="main">
        <div className="title"><h1>{msg}</h1></div>
        <div className={closed ? 'hide' : ''}>
          <div>
            <p className="bold">LOUD!</p>
            <p>TURN DOWN THE VOLUME!</p>
          </div>
          <div className="btn-wrap">
            <div
              className={`button light ${oscCount > 0 ? 'hide' : ''}`}
              onClick={this.handleCreate}>
              {'CREATE'}
            </div>
            <div
              className={`button ${msg === 'BUZZING' ? 'off' : 'on'} ${oscCount === 0 ? 'hide' : ''}`}
              onClick={msg === 'AUDIO CONTEXT CLOSED!' ? null : this.props.susRes}>
              {susResToggle}
            </div>
            <div
              className={`button sm ${oscCount === 0 ? 'hide' : ''}`}
              onClick={this.handleKill}>
              {'KILL'}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default connect(
  state => ({...state}),
  dispatch => ({
    start:  () => {
      dispatch( startCtxUI() )
      dispatch( emit( start ) )
    },
    susRes: () => {
      dispatch( susResAudioCtx() )
      dispatch( emit( susRes ) )
    },
    close: () => {
      dispatch( closeCtxUI() )
      dispatch( emit( close ) )
    },
  })
)(RRWAExamplesApp);