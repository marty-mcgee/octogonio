import React, { Component } from 'react'
//import PropTypes from 'prop-types'

class Questions extends Component {

    constructor(props) {
        super(props)

        this.ask = this.ask.bind(this)
        this.addQuestion = this.addQuestion.bind(this)
    }

	ask(question) {
        console.log('Button clicked on question: ' + question.q)
		this.props.emit('ask', question)
	}

	addQuestion(question, i) {
		return (
			<div key={i} className="col-xs-12 col-sm-6 col-md-3">
				<button onClick={this.ask.bind(null, question)}>{question.q}</button>
			</div>
		);
	}

    render() {
        return(
            <div>
                <h1>
                    Questions: {this.props.questions.length} questions
                </h1>
                <div id="questions" className="row">
                    {this.props.questions.map(this.addQuestion)}
                </div>
            </div>
        )
    }
}

export default Questions