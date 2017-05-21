import React from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import WTimeAPI from 'WTimeAPI'
import ProjectDetails from 'ProjectDetails'
import {getProjectSuccess} from 'actions/projectActions'

class ProjectContainer extends React.Component {

  componentDidMount() {

    WTimeAPI.getProject(this.props.accessToken, this.props.params.projectId).then((project) => {
      console.log(project);
      this.props.getProjectSuccess(project)
    })

  }

  render() {
    let renderProject = () => {
      if (this.props.project) {
        return <ProjectDetails {...this.props.project}/>
      } else {
        return <p>Loading...</p>
      }
    }

    return renderProject()
  }

}

const mapStateToProps = function (state) {
  return {
    accessToken: state.userState.accessToken,
    project: state.projectState.project
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    getProjectSuccess: (project) => dispatch(getProjectSuccess(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer)