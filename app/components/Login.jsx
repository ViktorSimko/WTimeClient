import React from 'react'
import WTimeAPI from 'WTimeAPI'
import {hashHistory} from 'react-router'

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();

    let userName = this.refs.userNameField.value;
    let password = this.refs.passwordField.value;
    WTimeAPI.loginUser(userName, password).then(() => {
      hashHistory.push('/projects');
    });
  }

  render() {
    return (
      <div id='wtime-login'>
        <form onSubmit={this.handleLogin}>
          <input type='text' ref='userNameField'/>
          <input type='password' ref='passwordField'/>
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
}

export default Login