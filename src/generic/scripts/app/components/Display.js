import React, { Component } from 'react'
//import PropTypes from 'prop-types'

class Display extends Component {

    render() {
        return(
            (this.props.if) ? <div>{this.props.children}</div> : null
        )
    }
}

export default Display