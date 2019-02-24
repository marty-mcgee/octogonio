import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import * as authActions from '../actions/authActions'
// import { Form, FormGroup, FormControl } from 'react-bootstrap' // Input
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'

class SignUp extends Component {

  static propTypes = {
    welcomePage: PropTypes.string.isRequired,
    userValidation: PropTypes.array.isrequired,
    dispatch: PropTypes.func.isRequired
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
      username: this.props.welcomePage || '',
      password: '',
      confirmPassword: ''
    };
  }
  componentWillMount() {
    const { dispatch, userValidation } = this.props;
    if(userValidation.length === 0) {
      dispatch(actions.usernameValidationList());
    }
  }
  componentDidMount() {
    if (this.state.username.length) {
      //this.refs.passwordInput.getInputDOMNode().focus();
    } else {
      //this.refs.usernameInput.getInputDOMNode().focus();
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    if (!this.state.username.length) {
      //this.refs.usernameInput.getInputDOMNode().focus();
    }
    if (this.state.username.length && !this.state.password.length) {
      //this.refs.passwordInput.getInputDOMNode().focus();
    }
    if (this.state.username.length && this.state.password.length && !this.state.confirmPassword.length) {
      //this.refs.confirmPasswordInput.getInputDOMNode().focus();
    }
    if (this.state.username.length && this.state.password.length && this.state.confirmPassword.length) {
      const userObj = {
        username: this.state.username,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
      };
      dispatch(authActions.signUp(userObj))
      const initLobby = {
        name: "Lobby",
        id: 0,
        private: false
      };
      dispatch(actions.createChannel(initLobby));
      this.setState({ username: '', password: '', confirmPassword: ''});
    }
  }
  handleChange(event) {
    if (event.target.name === 'username') {
      this.setState({ username: event.target.value });
    }
    if (event.target.name === 'password') {
      this.setState({ password: event.target.value });
    }
    if (event.target.name === 'confirm-password') {
      this.setState({ confirmPassword: event.target.value });
    }
  }
  validateUsername() {
    const { userValidation } = this.props;
    if (userValidation.filter(user => {
      return user === this.state.username.trim();
    }).length > 0) {
      return 'error';
    }
    return 'success';
  }
  validateConfirmPassword() {
    if (this.state.confirmPassword.length > 0 && this.state.password.length > 0) {
      if (this.state.password === this.state.confirmPassword) {
        return 'success';
      }
      return 'error';
    }
  }
  render() {
    return (
      <div>
        <header style={{display: 'flex', justifyContent: 'center', background: '#000000', color: '#FFFFFF', flexGrow: '0', order: '0'}}>
        Sign Up
        </header>
        <main style={{display: 'flex', justifyContent: 'center'}}>
          <form onSubmit={::this.handleSubmit}>
            <section>
              <FormGroup>
                <TextField
                  label="Username"
                  ref="usernameInput"
                  type="text"
                  // help={this.validateUsername() === 'error' && 'A user with that name already exists!'}
                  // bsStyle={this.validateUsername()}
                  autoFocus={true}
                  name="username"
                  value={this.state.username}
                  placeholder="Enter username"
                  onChange={::this.handleChange}
                />
              </FormGroup>
            </section>
            <section>
              <FormGroup>
                <TextField
                  label="Password"
                  ref="passwordInput"
                  type="password"
                  name="password"
                  value={this.state.password}
                  placeholder="Enter password"
                  onChange={::this.handleChange}
                />
              </FormGroup>
            </section>
            <section>
              <FormGroup>
                <TextField
                  label="Confirm Password"
                  ref="confirmPasswordInput"
                  //help={this.validateConfirmPassword() === 'error' && 'Your password doesn\'t match'}
                  type="password"
                  name="confirm-password"
                  value={this.state.confirmPassword}
                  placeholder="Enter password again" 
                  onChange={::this.handleChange}
                />
              </FormGroup>
            </section>
            <Button
              //disabled={this.validateUsername() === 'error' || this.validateConfirmPassword() === 'error' && true}
              color="primary"
              style={{width: '100%', height: '4rem', marginTop: '2rem'}}
              onClick={::this.handleSubmit}
              type="submit">
              <p style={{color: 'white', margin: '0', padding: '0', fontSize: '1.5em'}} >Sign Up</p>
            </Button>
          </form>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      welcomePage: state.welcomePage,
      userValidation: state.userValidation.data
  }
}

export default connect(mapStateToProps)(SignUp)
