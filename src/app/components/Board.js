import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import Display from './Display'
import { BarChart } from 'recharts'

class Board extends Component {

    barChartData(results) {
        return Object.keys(results).map(function(choice) {
            return {
                label: choice,
                values: results[choice]
            }
        })
    }

    render() {
        return(
            <div id="scoreboard">

                <Display if={this.props.status === 'connected' && !this.props.currentQuestion}>
                    <h3>Awaiting a Question..</h3>
                </Display>
                
                <Display if={this.props.status === 'connected' && this.props.currentQuestion}>
                    <h3>{this.props.currentQuestion.q}</h3>
                    <div>
                        {JSON.stringify(this.props.results)}
                    </div>
                    <BarChart 
                        data={this.barChartData(this.props.results)} 
                        title={this.props.currentQuestion.q}
                        height={window.innerHeight * 0.6}
                        width={window.innerWidth * 0.9}
                    />
                </Display>

            </div>
        )
    }
}

export default Board