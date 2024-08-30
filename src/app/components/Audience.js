import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import Display from './Display'
import Join from './Join'
import Ask from './Ask'

class Audience extends Component {

    render() {
        return(
            <div>
                <h1>
                    Audience : {this.props.title}
                </h1>
                <Display if={this.props.status === 'connected'}>   

                    <Display if={this.props.member.name}>
                        
                        <h2>Welcome {this.props.member.name}</h2>
                        <p>{this.props.audience.length} audience members connected</p>
                        
                        <Display if={!this.props.currentQuestion}>
                            <h3>Questions will appear here.</h3>
                        </Display>

                        <Display if={this.props.currentQuestion}>
                            {/* <h3>{this.props.currentQuestion.q}</h3> */}
                            <Ask question={this.props.currentQuestion} emit={this.props.emit} />
                        </Display>

                    </Display>

                    <Display if={!this.props.member.name}>
                        <h2>Join the session</h2>
                        <Join emit={this.props.emit} />
                    </Display>

                </Display>
            </div>
        )
    }
}

export default Audience