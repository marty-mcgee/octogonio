import React, { Component } from 'react';
import PropTypes from 'prop-types'

class AudioRouter extends Component {
  constructor(props) {
    super(props);

    if (props.inputNode) {
      this.props.connectInput(props.inputNode);
    }

    if (props.outputNode) {
      this.props.connectToOutput(props.outputNode);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.inputNode !== nextProps.inputNode) {
      if (this.props.inputNode) {
        this.props.inputNode.disconnect(this.props.audioContext, 0);
      }
      this.props.connectInput(nextProps.inputNode, this.props.inputNode);
    }
    if (this.props.outputNode !== nextProps.outputNode) {
      this.props.connectToOutput(nextProps.outputNode);
    }
  }

  render() {
    return (
      this.props.children
    );
  }
}

AudioRouter.propTypes = {
  inputNode: PropTypes.object,
  outputNode: PropTypes.object,
  children: PropTypes.element.isRequired,
  connectInput: PropTypes.func.isRequired,
  connectToOutput: PropTypes.func.isRequired,
  audioContext: PropTypes.object
};

export default AudioRouter;
