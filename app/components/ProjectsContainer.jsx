import React from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import WTimeAPI from 'WTimeAPI'
import ProjectList from 'ProjectList'
import {getProjectsSuccess} from 'actions/projectActions'
import {selectedProject} from 'actions/projectActions'

class ProjectsContainer extends React.Component {

  constructor(props) {
    super(props)

    this.handleProjectSelected = this.handleProjectSelected.bind(this)
  }

  getProjects() {
    WTimeAPI.getProjects(this.props.accessToken).then((projects) => {
      this.props.getProjectsSuccess(projects)
    })
  }

  componentDidMount() {
    this.getProjects()
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.shouldUpdate) {
      return
    }

    this.getProjects()
  }

  handleProjectSelected(id) {
    this.props.selectedProject(id);
  }

  render() {
    let renderProjects = () => {
      if (this.props.projects) {
        return <ProjectList projects={this.props.projects} onProjectSelected={this.handleProjectSelected}/>
      } else {
        return <p>Loading...</p>
      }
    }

    return (
      <div id='project-list-pane' className='small-4 medium-3 large-2 columns listContainer'>
        {renderProjects()}
      </div>
    )
  }

}

const mapStateToProps = function (state) {
  return {
    accessToken: state.userState.accessToken,
    projects: state.projectState.projects,
    shouldUpdate: state.projectState.projectsContainerShouldUpdate
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    getProjectsSuccess: (projects) => dispatch(getProjectsSuccess(projects)),
    selectedProject: (id) => dispatch(selectedProject(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)