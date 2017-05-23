import React from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import WTimeAPI from 'WTimeAPI'
import TaskDetails from 'TaskDetails'
import {getTaskSuccess} from 'actions/taskActions'

class TaskContainer extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.shouldUpdate) {
      return
    }

    WTimeAPI.getTask(this.props.accessToken, this.props.taskId).then((task) => {
      console.log(task);
      this.props.getTaskSuccess(task)
    })
  }

  render() {
    let renderTask = () => {
      if (this.props.task) {
        return <TaskDetails {...this.props.task}/>
      } else {
        return <p>Loading...</p>
      }
    }

    return (
      <div className='columns listContainer'>
        {renderTask()}
      </div>
    )
  }

}

const mapStateToProps = function (state) {
  return {
    accessToken: state.userState.accessToken,
    task: state.taskState.task,
    taskId: state.taskState.selectedTask,
    shouldUpdate: state.taskState.taskViewShouldUpdate
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    getTaskSuccess: (task) => dispatch(getTaskSuccess(task))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)