import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { welcomePage } from '../actions/actions'
import { connect } from 'react-redux'
// import FBSignIn from './FBSignIn'
// import SignIn from './SignIn'
// import { Button, Form, FormGroup, FormControl } from 'react-bootstrap' // Input
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'

class WelcomePage extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  constructor(props, context) {
    super(props, context)
    this.state = {
      username: ''
    }
  }
  componentDidMount() {
    //this.refs.usernameInput.getInputDOMNode().focus()
  }
  handleChange(event) {
    if (event.target.name === 'username') {
      this.setState({ username: event.target.value })
    }
  }
  handleSubmit() {
    const { dispatch } = this.props
    const username = this.state.username
    this.setState({ username: username })
    dispatch(welcomePage(username))
  }
  render() {
    const {screenWidth} = this.props
    if(screenWidth < 500) {
      return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <header style={{textAlign: 'center'}}>
            <p style={{fontSize: '1.5em', marginRight: '1em'}}>OCTOGON.IO</p>
            <p style={{fontSize: '1.2em', padding: '1em'}}>
              WELCOME -||- This is an open source group music recording program.
            </p>
          </header>
          <main>
            <form>
              <FormGroup>
                <TextField
                  style={{height: '2.7em', fontSize: '1.3em', width: '100%'}}
                  ref="usernameInput"
                  type="text"
                  name="username"
                  value={this.state.username}
                  placeholder="Enter username"
                  onChange={::this.handleChange}
                />
                <Link to="/signup">
                  <Button
                    color="primary"
                    style={{width: '100%'}}
                    type="submit"
                    onClick={::this.handleSubmit}>
                      <p style={{margin: '0', padding: '0', fontSize: '1.5em'}}>Sign Up</p>
                  </Button>
                </Link>
              </FormGroup>
            </form>
            <p style={{margin: '1em', textAlign: 'center'}}>or</p>
            <Link to="/signin">
              <Button style={{width: '100%'}} color="secondary" >Sign In</Button>
            </Link>
          </main>
        </div>
      )
    }
    return (
      <div>
        <header style={{display: 'flex', justifyContent: 'center', flexGrow: '0', order: '0'}}>
          <div style={{justifyContent: 'center'}}>
            <p style={{fontSize: '1.5em', marginRight: '1em'}}>OCTOGON.IO</p>
            <p style={{fontSize: '1.2em', padding: '1em'}}>
              WELCOME -||- This is an open source group music recording program.
            </p>
          </div>
        </header>
        <main style={{display: 'flex', justifyContent: 'center'}}>
          <form style={{height: '20rem', display: 'flex', justifyContent: 'center'}}>
            <div style={{margin: 'auto', paddingRight: '0.2em', height: '3.5em'}}>
              <FormGroup>
                <FormControl
                  style={{height: '2.7em', fontSize: '1.3em'}}
                  ref="usernameInput"
                  type="text"
                  name="username"
                  value={this.state.username}
                  placeholder="Enter username"
                  onChange={::this.handleChange}
                />
              </FormGroup>
            </div>
            <section style={{margin: 'auto', width: '12em', height: '3.5em'}}>
              <Link to="/signup">
                <Button
                  bsStyle="success"
                  style={{margin: 'auto', width: '12em', height: '3.5em'}}
                  type="submit"
                  onClick={::this.handleSubmit}>
                    <p style={{margin: '0', padding: '0', fontSize: '1.5em'}}>Sign Up</p>
                </Button>
              </Link>
            </section>
          </form>
          <div style={{height: '3.5em', width: '12em', alignSelf: 'center', display: 'flex', marginLeft: '1em'}}>
            <p style={{marginRight: '1em', marginTop: '1em'}}> Or </p>
            <Link to="/signin">
              <Button style={{margin: 'auto', height: '3.5em'}} bsStyle="default" >Sign in</Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      screenWidth: state.environment.screenWidth
  }
}

export default connect(mapStateToProps)(WelcomePage)
