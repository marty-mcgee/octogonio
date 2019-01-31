import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

class Header extends Component {

    // static propTypes = {
    //     title: PropTypes.string.isRequired
    // }
    // static defaultProps = {
    //     status: 'disconnected'
    // }

    constructor(props, context) {
        super(props, context)
    }

    render() {
        return(
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        -||- octogon.io 
                        -||- Room: {this.props.title}
                    </Typography>
                    <Typography variant="subtitle1" color="inherit">
                        -||- Speaker: {this.props.speaker.name}
                    </Typography>
                    <span id="connection-status" className={this.props.status}>
                        -||- {this.props.status}
                    </span>
                </Toolbar>
            </AppBar>
        )
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

Header.defaultProps = {
    status: 'disconnected'
}

export default Header