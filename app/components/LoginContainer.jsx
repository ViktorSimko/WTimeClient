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

  render() {
    return (
      <div> 
        <Login onLogin={this.handleLogin}/>
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