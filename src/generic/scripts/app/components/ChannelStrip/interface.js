import React, { Component } from 'react';
import PropTypes from 'prop-types'
//import { Knob, Switch, Fader } from '../controls';
import Knob from '../controls/Knob';
import Fader from '../controls/Fader';
import Switch from '../controls/Switch';
import styles from './ChannelStrip.scss';

class ChannelStripInterface extends Component {
  constructor(props) {
    super()
    this.state = {
      selectedPlugin: null
    }
    this.addPlugin = evt => {
      if(!evt.target.value) {
        return
      }
      props.addPlugin(props.availablePlugins[evt.target.value])
      this.setState(() => ({selectedPlugin: null}))
    }
    this.updatePlugin = evt => props.updatePlugin(evt.target.value)
  }
  render() {
    const pluginOptions = this.props.availablePlugins.map((plugin, index) => ( <option value={index}>{plugin.name}</option>))
    return (
        <div className={styles.container}>
          <Switch
            label="Mute"
            setValue={this.props.setMute}
            value={this.props.mute}
          />
          <Knob
            label="Pan"
            value={this.props.pan}
            setValue={this.props.setPan}
            min={-1}
            max={1}
            precision={2}
          />
          <select onChange={this.addPlugin} className={styles.plugins}>
            <option value={false}>Add plugin</option>
            {pluginOptions}
          </select>

{/* 
          {this.props.selectedPlugins.map(plugin => (
            <select onChange={this.updatePlugin} value={plugin}>
              {pluginOptions}
            </select>
          ))} */}

          <Fader
            value={this.props.gain}
            setValue={this.props.setGain}
            label="Gain"
            min={0}
            max={1}
            step={0.01}
          />
      </div>
    );
  }
}

ChannelStripInterface.propTypes = {
  gain: PropTypes.number,
  setGain: PropTypes.func,

  pan: PropTypes.number,
  setPan: PropTypes.func,

  mute: PropTypes.bool,
  setMute: PropTypes.func,

  availablePlugins: PropTypes.array,
  selectedPlugins: PropTypes.array,
  addPlugin: PropTypes.func
};

export default ChannelStripInterface;
