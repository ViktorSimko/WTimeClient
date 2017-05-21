import React from 'react'

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();

    let userName = this.refs.userNameField.value;
    let password = this.refs.passwordField.value;
    this.props.onLogin(userName, password);
  }

  render() {
    return (
      <div>
        <h3 className='text-center'>Login</h3>
        <form onSubmit={this.handleLogin}>
          <input type='text' ref='userNameField' />
          <input type='password' ref='passwordField' />
          <button type='submit' className='button expanded'>Login</button>
        </form>
      </div>
    )
  }
}



export default Login