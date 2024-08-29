import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import Display from './Display'

class Ask extends Component {

    static getInitialState() {
        return {
            choices: [],
            answer: undefined
        }
    }

    constructor(props) {
        super(props)

        this.state = this.constructor.getInitialState()

        this.setupChoices = this.setupChoices.bind(this)
        this.select = this.select.bind(this)
        this.addChoiceButton = this.addChoiceButton.bind(this)
    }

    // component is ready to mount
    componentWillMount() {
        this.setupChoices()
    }

    // component has new/different properties
    componentWillReceiveProps() {
        this.setupChoices()
    }

    setupChoices() {
        var choices = Object.keys(this.props.question)
        choices.shift() // get rid of 'q'
        this.setState({ 
            choices: choices,
            answer: sessionStorage.answer 
        })
    }

    select(choice) {
        this.setState({ answer: choice })
        sessionStorage.answer = choice
        this.props.emit('answer', {
            question: this.props.question,
            choice: choice
        })
    }

    addChoiceButton(choice, i) {
        var buttonTypes = ['primary', 'secondary', 'success', 'warning', 'danger']
        return (
            <button key={i} 
                className={"col-xs-12 col-sm-6 btn btn-" + buttonTypes[i]}
                onClick={this.select.bind(null, choice)}
            >
                {choice}: {this.props.question[choice]}
            </button>
        )
    }

    render() {
        return(
            <div id="currentQuestion">
                
                <Display if={this.state.answer}>
                    <h3>You answered: {this.props.answer}</h3>
                    <div className="row">
                        {this.props.question[this.state.answer]}
                    </div>
                </Display>

                <Display if={!this.state.answer}>
                    <h3>{this.props.question.q}</h3>
                    <div className="row">
                        {this.state.choices.map(this.addChoiceButton)}
                    </div>
                </Display>
                
            </div>
        )
    }
}

export default Ask