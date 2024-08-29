import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as authActions from '../actions/authActions'
// import { Button, Form, FormGroup, FormControl } from 'react-bootstrap' // Input
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'

class SignIn extends Component {

  static propTypes = {
    welcomePage: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  }
  constructor(props, context) {
    super(props, context)
    this.state = {
      username: this.props.welcomePage || '',
      password: ''
    }
  }
  componentDidMount() {
    if (this.state.username.length) {
      //this.refs.passwordInput.getInputDOMNode().focus()
    } else {
      //this.refs.usernameInput.getInputDOMNode().focus()
    }
  }
  handleChange(event) {
    if (event.target.name === 'username') {
      this.setState({ username: event.target.value })
    }
    if (event.target.name === 'password') {
      this.setState({ password: event.target.value })
    }
  }
  handleSubmit(event) {
    event.preventDefault()
    const { dispatch } = this.props
    if (this.state.username.length < 1) {
      //this.refs.usernameInput.getInputDOMNode().focus()
    }
    if (this.state.username.length > 0 && this.state.password.length < 1) {
      //this.refs.passwordInput.getInputDOMNode().focus()
    }
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      var userObj = {
        username: this.state.username,
        password: this.state.password
      }
      dispatch(authActions.signIn(userObj))
      // WHY IS THIS SETTING BLANKS ??? 
      // BECAUSE PREVIOUS DISPATCH SIGNS THEM IN ??? 
      // AND WE DON'T NEED STATE ANY MORE ???
      this.setState({ username: '', password: '', redirect: true })
    }
  }
  render() {
    // if (this.state.redirect) {
    //   return <Redirect push to="/chat" />
    // }
    return (
      <div>
        <header style={{display: 'flex', justifyContent: 'center', background: '#000000', color: '#FFFFFF', flexGrow: '0', order: '0'}}>
          Sign In to Chat
        </header>
        <main style={{display: 'flex', justifyContent: 'center'}}>
          <form onSubmit={::this.handleSubmit}>
            <FormGroup>
              <TextField
                label="Username"
                ref="usernameInput"
                type="text"
                name="username"
                placeholder="Enter username"
                value={this.state.username}
                onChange={::this.handleChange}
              />
              <TextField
                label="Password"
                ref="passwordInput"
                type="password"
                name="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={::this.handleChange}
              />
              <Button
                color="primary"
                style={{width: '100%', height: '4rem', marginTop: '2rem'}} name="submitButton"
                type="submit" >
                  <p style={{color: 'white', margin: '0', padding: '0', fontSize: '1.5em'}} >Sign In</p>
              </Button>
            </FormGroup>
          </form>
        </main>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      welcomePage: state.welcomePage,
  }
}
export default connect(mapStateToProps)(SignIn)
