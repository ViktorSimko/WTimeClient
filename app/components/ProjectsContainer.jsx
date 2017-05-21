import React from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import WTimeAPI from 'WTimeAPI'
import ProjectList from 'ProjectList'
import {getProjectsSuccess} from 'actions/projectActions'

class ProjectsContainer extends React.Component {

  componentDidMount() {

    WTimeAPI.getProjects(this.props.accessToken).then((projects) => {
      this.props.getProjectsSuccess(projects)
    })

  }

  render() {
    let renderProjects = () => {
      if (this.props.projects) {
        return <ProjectList projects={this.props.projects}/>
      } else {
        return <p>Loading...</p>
      }
    }

    return renderProjects()
  }

}

const mapStateToProps = function (state) {
  return {
    accessToken: state.userState.accessToken,
    projects: state.projectState.projects
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    getProjectsSuccess: (projects) => dispatch(getProjectsSuccess(projects))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)