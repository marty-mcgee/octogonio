import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import Display from './Display'
import JoinSpeaker from './JoinSpeaker'
import Attendance from './Attendance'
import Questions from './Questions'

class Speaker extends Component {

    render() {
        return(
            <div>
                <h1>
                    Speaker : {this.props.title}
                </h1>
                <Display if={this.props.status === 'connected'}>

                    <Display if={this.props.member.name}>
                        <p>Member: {this.props.member.name}</p>
                    </Display>

                    <Display if={this.props.member.name && this.props.member.type === 'speaker'}>
                        <Questions questions={this.props.questions} emit={this.props.emit} />
                        <Attendance audience={this.props.audience} />
                    </Display>

                    <Display if={!this.props.member.name}>
                        <h2>Start the presentation room</h2>
                        <JoinSpeaker emit={this.props.emit} />
                    </Display>

                </Display>
            </div>
        )
    }
}

export default Speaker