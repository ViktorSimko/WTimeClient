import React from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import WTimeAPI from 'WTimeAPI'
import TaskList from 'TaskList'
import {getTasksSuccess} from 'actions/taskActions'
import {selectedTask} from 'actions/taskActions'

class TasksContainer extends React.Component {

  constructor(props) {
    super(props)

    this.handleTaskSelected = this.handleTaskSelected.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {

    if(!this.props.shouldUpdate) {
      return
    }

    WTimeAPI.getTasks(this.props.accessToken, this.props.projectId).then((tasks) => {
      this.props.getTasksSuccess(tasks)
    })

  }

  handleTaskSelected(id) {
    this.props.selectedTask(id);
  }

  render() {
    let renderTasks = () => {
      if (this.props.tasks) {
        return <TaskList tasks={this.props.tasks} onTaskSelected={this.handleTaskSelected}/>
      } else {
        return <p>Loading...</p>
      }
    }

    return (
      <div id='task-list-pane'>
        {renderTasks()}
      </div>
    )
  }

}

const mapStateToProps = function (state) {
  return {
    accessToken: state.userState.accessToken,
    projectId: state.projectState.selectedProject,
    tasks: state.taskState.tasks,
    shouldUpdate: state.projectState.projectContainerShouldUpdate || state.taskState.tasksContainerShouldUpdate
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    getTasksSuccess: (tasks) => dispatch(getTasksSuccess(tasks)),
    selectedTask: (id) => dispatch(selectedTask(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer)