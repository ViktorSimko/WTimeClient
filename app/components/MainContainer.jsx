import React from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import ProjectContainer from 'ProjectContainer'
import ProjectsContainer from 'ProjectsContainer'

class MainContainer extends React.Component {

  componentDidMount() {
    if (!this.props.isLoggedIn) {
      hashHistory.replace('/login')
    }
  }

  createChildren() {
    return (
      <div className='row'>
        <ProjectsContainer/>
        <ProjectContainer/>
      </div>
    )
  }

  render() {
    if (this.props.isLoggedIn) {
      return this.createChildren()
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