import React from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import {loginSuccess} from 'actions/userActions'
import Login from 'Login'
import WTimeAPI from 'WTimeAPI'

class LoginContainer extends React.Component {

  constructor(props) {
    super(props)

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(username, password) {
    WTimeAPI.loginUser(username, password).then((userData) => {
      this.props.loginSuccess(userData);
      hashHistory.replace('/');
    })
  }

  handleRegister(username, password) {
    WTimeAPI.registerUser(username, password).then((userData) => {
      hashHistory.replace('/login');
    })
  }

  render() {
    return (
      <div className='row align-center align-middle'>
        <div className='small-6 medium-4 large-3 column'>
          <Login onLogin={this.handleLogin} onRegister={this.handleRegister}/>
        </div>
      </div>
    )
  }

}

const mapDispatchToProps = function (dispatch) {
  return {
     loginSuccess: (userData) => {
       dispatch(loginSuccess(userData));
     }     
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer)