import React from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import WTimeAPI from 'WTimeAPI'
import ProjectDetails from 'ProjectDetails'
import {getProjectSuccess} from 'actions/projectActions'
import {getProjectStatsSuccess} from 'actions/statsActions'
import TasksContainer from 'TasksContainer'

class ProjectContainer extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.shouldUpdate) {
      return
    }

    WTimeAPI.getProject(this.props.accessToken, this.props.projectId).then((project) => {
      this.props.getProjectSuccess(project)
    })

    WTimeAPI.getProjectStats(this.props.accessToken, this.props.projectId).then((stats) => {
      this.props.getProjectStatsSuccess(stats)
    })
  }

  render() {
    let renderProject = () => {
      if (this.props.project) {
        return (
          <div>
            <ProjectDetails {...this.props.project} stats={this.props.stats}/>
            <TasksContainer/>
          </div>
        )
      } else {
        return <h2 className='subheader text-center'>Select a project</h2>
      }
    }

    return (
      <div className='columns listContainer'>
        {renderProject()}
      </div>
    )
  }

}

const mapStateToProps = function (state) {
  return {
    accessToken: state.userState.accessToken,
    project: state.projectState.project,
    projectId: state.projectState.selectedProject,
    shouldUpdate: state.projectState.projectContainerShouldUpdate,
    stats: state.statsState.projectStats
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    getProjectSuccess: (project) => dispatch(getProjectSuccess(project)),
    getProjectStatsSuccess: (stats) => dispatch(getProjectStatsSuccess(stats))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer)