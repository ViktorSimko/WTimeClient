import React from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import WTimeAPI from 'WTimeAPI'
import TaskDetails from 'TaskDetails'
import {getTaskSuccess} from 'actions/taskActions'
import {getTaskStatsSuccess} from 'actions/statsActions'
import {updateTaskStats} from 'actions/statsActions'
import {updateProjectStats} from 'actions/statsActions'
import {updateWorkIntervalsContainer} from 'actions/workIntervalActions'
import WorkIntervalsContainer from 'WorkIntervalsContainer'
import Timer from 'Timer'

class TaskContainer extends React.Component {

  constructor(props) {
    super(props)

    this.handleAddWorkInterval = this.handleAddWorkInterval.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.shouldUpdate) {
      return
    }

    WTimeAPI.getTask(this.props.accessToken, this.props.taskId).then((task) => {
      this.props.getTaskSuccess(task)
    })

    if (this.props.statsShouldUpdate) {
      WTimeAPI.getTaskStats(this.props.accessToken, this.props.taskId).then((stats) => {
        this.props.getTaskStatsSuccess(stats)
      })
    }
  }

  handleAddWorkInterval(workInterval) {
    workInterval.taskId = this.props.taskId

    WTimeAPI.postWorkInterval(this.props.accessToken, workInterval).then((workInterval) => {
      this.props.updateWorkIntervalsContainer()
      this.props.updateProjectStats()
      this.props.updateTaskStats()
    })
  }

  render() {

    let renderTaskAndWorkIntervals = () => {

      if (this.props.project && this.props.task && this.props.project.id === this.props.task.projectId) {
        return (
          <div>
            <TaskDetails {...this.props.task} stats={this.props.stats}/>
            <Timer onAddWorkInterval={this.handleAddWorkInterval}/>
            <WorkIntervalsContainer/>
          </div>
        ) 
      }
    }

    return (
      <div className='columns listContainer'>
        {renderTaskAndWorkIntervals()}
      </div>
    )
  }

}

const mapStateToProps = function (state) {
  return {
    accessToken: state.userState.accessToken,
    task: state.taskState.task,
    taskId: state.taskState.selectedTask,
    shouldUpdate: state.taskState.taskContainerShouldUpdate,
    project: state.projectState.project,
    stats: state.statsState.taskStats,
    statsShouldUpdate: state.statsState.taskStatsShouldUpdate
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    getTaskSuccess: (task) => dispatch(getTaskSuccess(task)),
    getTaskStatsSuccess: (stats) => dispatch(getTaskStatsSuccess(stats)),
    updateWorkIntervalsContainer: () => dispatch(updateWorkIntervalsContainer()),
    updateProjectStats: () => dispatch(updateProjectStats()),
    updateTaskStats: () => dispatch(updateTaskStats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)