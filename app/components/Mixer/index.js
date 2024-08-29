/* eslint-disable react/jsx-no-bind */

import 'webrtc-adapter-test';
import Immutable from 'immutable';
import React, { Component } from 'react';
import PropTypes from 'prop-types'

import ChannelStrip from '../ChannelStrip';
import styles from './Mixer.scss';

class Mixer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.channels}>
        {this.props.tracks.map((track, i) => (
          <ChannelStrip
            key={`track_${i}`}
            index={i}

            audioContext={this.props.audioContext}
            inputNode={this.props.inputNodes[i]}
            outputNode={this.props.outputNode}

            gain={track.get('gain')}
            setGain={this.props.setGain}

            mute={track.get('mute')}
            setMute={this.props.setMute}

            pan={track.get('pan')}
            setPan={this.props.setPan}

            availablePlugins={this.props.availablePlugins}
          />
        ))}
      </div>
    );
  }
}

Mixer.propTypes = {
  tracks: PropTypes.instanceOf(Immutable.List),
  audioContext: PropTypes.object.isRequired,
  inputNodes: PropTypes.array,
  outputNode: PropTypes.object,

  setGain: PropTypes.func,
  setPan: PropTypes.func,
  setMute: PropTypes.func,

  availablePlugins: PropTypes.array
};

export default Mixer;
