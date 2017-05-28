import React from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import WTimeAPI from 'WTimeAPI'
import TaskList from 'TaskList'
import {getTasksSuccess} from 'actions/taskActions'
import {selectedTask} from 'actions/taskActions'
import {showEditTaskDialog} from 'actions/taskActions'
import {hideEditTaskDialog} from 'actions/taskActions'
import {updateTasksContainer} from 'actions/taskActions'
import {deleteTaskSuccess} from 'actions/taskActions'
import {updateTaskStats} from 'actions/statsActions'
import {updateProjectStats} from 'actions/statsActions'
import TaskEdit from 'TaskEdit'
import Reveal from 'react-foundation-components/lib/reveal'

class TasksContainer extends React.Component {

  constructor(props) {
    super(props)

    this.handleTaskSelected = this.handleTaskSelected.bind(this)
    this.handleAddTask = this.handleAddTask.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  getTasks() {
    WTimeAPI.getTasks(this.props.accessToken, this.props.projectId).then((tasks) => {
      this.props.getTasksSuccess(tasks)
    })
  }

  componentDidMount() {
    this.getTasks()
  }

  componentDidUpdate(prevProps, prevState) {
    if(!this.props.shouldUpdate) {
      return
    }

    this.getTasks()
  }

  handleAddTask() {
    this.props.showEditTaskDialog()
  }

  handleTaskSelected(id) {
    this.props.selectedTask(id)
    this.props.updateTaskStats()
  }

  handleSave(edit, task) {

    task.projectId = this.props.projectId

    WTimeAPI.postTask(this.props.accessToken, task).then((task) => {
      this.props.hideEditTaskDialog()
      this.props.updateTasksContainer()
    })

  }

  handleClose() {
    this.props.hideEditTaskDialog()
  }

  handleDelete(taskId) {
    WTimeAPI.deleteTask(this.props.accessToken, taskId).then((task) => {
      this.props.deleteTaskSuccess(taskId)
      this.props.updateProjectStats()
    })
  }

  render() {
    let renderTasks = () => {
      if (this.props.tasks) {
        return <TaskList tasks={this.props.tasks} 
                         onTaskSelected={this.handleTaskSelected} 
                         onAddTask={this.handleAddTask}
                         onDelete={this.handleDelete}/>
      } else {
        return <p>Loading...</p>
      }
    }

    return (
      <div id='task-list-pane'>
        {renderTasks()}
        <Reveal show={this.props.edit}>
          <TaskEdit task={this.props.editingTask} onSave={this.handleSave} onClose={this.handleClose}/>
        </Reveal>
      </div>
    )
  }

}

const mapStateToProps = function (state) {
  return {
    accessToken: state.userState.accessToken,
    projectId: state.projectState.selectedProject,
    tasks: state.taskState.tasks,
    edit: state.taskState.edit,
    editingTask: state.taskState.editingTask,
    shouldUpdate: state.projectState.projectContainerShouldUpdate || state.taskState.tasksContainerShouldUpdate
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    getTasksSuccess: (tasks) => dispatch(getTasksSuccess(tasks)),
    selectedTask: (id) => dispatch(selectedTask(id)),
    showEditTaskDialog: (task) => dispatch(showEditTaskDialog(task)),
    hideEditTaskDialog: () => dispatch(hideEditTaskDialog()),
    deleteTaskSuccess: (id) => dispatch(deleteTaskSuccess(id)), 
    updateTasksContainer: () => dispatch(updateTasksContainer()),
    updateTaskStats: () => dispatch(updateTaskStats()),
    updateProjectStats: () => dispatch(updateProjectStats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer)