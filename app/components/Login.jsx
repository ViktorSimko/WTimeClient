import React from 'react'

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();

    let userName = this.refs.userNameField.value;
    let password = this.refs.passwordField.value;

    
    this.props.onLogin(userName, password);
  }

  handleRegister(e) {
    e.preventDefault();

    let userName = this.refs.userNameField.value;
    let password = this.refs.passwordField.value;

    
    this.props.onRegister(userName, password);
  }

  render() {
    return (
      <div>
        <h3 className='text-center'>Login</h3>
        <form>
          <input type='text' ref='userNameField' />
          <input type='password' ref='passwordField' />
          <button className='button hollow' onClick={this.handleLogin}>Login</button>
          <button className='button hollow' onClick={this.handleRegister}>Register</button>
        </form>
      </div>
    )
  }
}



export default Login