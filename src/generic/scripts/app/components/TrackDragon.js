import React, { Component } from 'react'

export default class TrackDragon extends Component {

    render = () => {
        return (
            <div style={{height: '100%'}} >
                THIS.PROPS.CHILDREN: {this.props.children}
            </div>
        )
    }
}