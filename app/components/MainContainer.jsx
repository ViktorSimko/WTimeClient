import React from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

class MainContainer extends React.Component {

  componentDidMount() {
    if (!this.props.isLoggedIn) {
      hashHistory.replace('/login')
    }
  }

  render() {
    if (this.props.isLoggedIn) {
      return this.props.children
    } else {
      return null
    }
  }

}

const mapStateToProps = function (state) {
  return {
     isLoggedIn: state.userState.isLoggedIn
  }
}

export default connect(mapStateToProps)(MainContainer)