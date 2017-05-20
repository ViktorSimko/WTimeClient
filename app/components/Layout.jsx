import React from 'react'
import {connect} from 'react-redux'

import NavigationBar from 'NavigationBar'
import {logoutSuccess} from 'actions/userActions'

class Container extends React.Component {
  render() {
    return (
      <div id='wtime-container'>
        <NavigationBar isLoggedIn={this.props.isLoggedIn} onLogOut={this.props.logOut}/>
        <div id='wtime-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    isLoggedIn: state.userState.isLoggedIn,
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    logOut: () => dispatch(logoutSuccess()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);