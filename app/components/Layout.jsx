import React from 'react'
import {connect} from 'react-redux'

import NavigationBar from 'NavigationBar'
import {logoutSuccess} from 'actions/userActions'

class Layout extends React.Component {
  render() {
    return (
      <div id='wtime-container'>
          {this.props.children}
      </div>
    )
  }
}

export default Layout