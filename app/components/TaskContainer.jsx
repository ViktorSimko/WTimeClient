import React from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import WTimeAPI from 'WTimeAPI'
import TaskDetails from 'TaskDetails'
import {getTaskSuccess} from 'actions/taskActions'
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
  }

  handleAddWorkInterval(workInterval) {
    workInterval.taskId = this.props.taskId

    WTimeAPI.postWorkInterval(this.props.accessToken, workInterval).then((workInterval) => {
      this.props.updateWorkIntervalsContainer()
    })
  }

  render() {

    let renderTaskAndWorkIntervals = () => {

      if (this.props.project && this.props.task && this.props.project.id === this.props.task.projectId) {
        return (
          <div>
            <TaskDetails {...this.props.task}/>
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
    project: state.projectState.project
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    getTaskSuccess: (task) => dispatch(getTaskSuccess(task)),
    updateWorkIntervalsContainer: () => dispatch(updateWorkIntervalsContainer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)