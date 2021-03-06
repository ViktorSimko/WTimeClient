import React from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import WTimeAPI from 'WTimeAPI'
import ProjectList from 'ProjectList'
import {getProjectsSuccess} from 'actions/projectActions'
import {selectedProject} from 'actions/projectActions'
import {showEditProjectDialog} from 'actions/projectActions'
import {hideEditProjectDialog} from 'actions/projectActions'
import {updateProjectsContainer} from 'actions/projectActions'
import {deleteProjectSuccess} from 'actions/projectActions'
import {updateProjectStats} from 'actions/statsActions'
import {logoutSuccess} from 'actions/userActions'
import ProjectEdit from 'ProjectEdit'
import Reveal from 'react-foundation-components/lib/reveal'

class ProjectsContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      edit: false
    }

    this.handleProjectSelected = this.handleProjectSelected.bind(this)
    this.handleAddProject = this.handleAddProject.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
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

  handleAddProject() {
    this.props.showEditProjectDialog()
  }

  handleProjectSelected(id) {
    this.props.selectedProject(id)
    this.props.updateProjectStats()
  }

  handleSave(edit, project) {
    
    WTimeAPI.postProject(this.props.accessToken, project).then((project) => {
      this.props.hideEditProjectDialog()
      this.props.updateProjectsContainer()
    })

  }

  handleClose() {
    this.props.hideEditProjectDialog()
  }

  handleDelete(projectId) {
    WTimeAPI.deleteProject(this.props.accessToken, projectId).then((project) => {
      this.props.deleteProjectSuccess(projectId)
    })
  }

  handleLogout() {
    this.props.logout()
    hashHistory.replace('/login')
  }

  render() {
    let renderProjects = () => {
      if (this.props.projects) {
        return <ProjectList projects={this.props.projects} 
                            onProjectSelected={this.handleProjectSelected} 
                            onAddProject={this.handleAddProject}
                            onDelete={this.handleDelete}/>
      } else {
        return <p>Loading...</p>
      }
    }

    return (
      <div id='project-list-pane' className='small-4 medium-3 large-2 columns listContainer'>
        <div className='row'>
          <h5 className='subheader columns'>{this.props.username}</h5>
          <button className='button alert small-4 columns' onClick={this.handleLogout}>Logout</button>
        </div>
        {renderProjects()}
        <Reveal show={this.props.edit}>
          <ProjectEdit project={this.props.editingProject} onSave={this.handleSave} onClose={this.handleClose}/>
        </Reveal>
      </div>
    )
  }

}

const mapStateToProps = function (state) {
  return {
    accessToken: state.userState.accessToken,
    username: state.userState.username,
    projects: state.projectState.projects,
    shouldUpdate: state.projectState.projectsContainerShouldUpdate,
    edit: state.projectState.edit,
    editingProject: state.projectState.editingProject
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    getProjectsSuccess: (projects) => dispatch(getProjectsSuccess(projects)),
    selectedProject: (id) => dispatch(selectedProject(id)),
    showEditProjectDialog: (project) => dispatch(showEditProjectDialog(project)),
    hideEditProjectDialog: () => dispatch(hideEditProjectDialog()),
    deleteProjectSuccess: (id) => dispatch(deleteProjectSuccess(id)),
    updateProjectsContainer: () => dispatch(updateProjectsContainer()),
    updateProjectStats: () => dispatch(updateProjectStats()),
    logout: () => dispatch(logoutSuccess())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)