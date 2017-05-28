import React from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import WTimeAPI from 'WTimeAPI'
import WorkIntervalList from 'WorkIntervalList'
import {getWorkIntervalsSuccess} from 'actions/workIntervalActions'
import {selectedWorkInterval} from 'actions/workIntervalActions'
import {updateWorkIntervalsContainer} from 'actions/workIntervalActions'
import {updateTaskStats} from 'actions/statsActions'
import {updateProjectStats} from 'actions/statsActions'

class WorkIntervalsContainer extends React.Component {

  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
  }

  getWorkIntervals() {
    WTimeAPI.getWorkIntervals(this.props.accessToken, this.props.taskId).then((workIntervals) => {
      this.props.getWorkIntervalsSuccess(workIntervals)
    })
  }

  componentDidMount() {
    this.getWorkIntervals()
  }

  componentDidUpdate(prevProps, prevState) {

    if(!this.props.shouldUpdate) {
      return
    }

    this.getWorkIntervals()
  }

  handleDelete(id) {
    WTimeAPI.deleteWorkInterval(this.props.accessToken, id).then((workInterval) => {
      this.props.updateWorkIntervalsContainer()
      this.props.updateTaskStats()
      this.props.updateProjectStats()
    })
  }

  render() {
    let renderWorkIntervals = () => {
      if (this.props.workIntervals) {
        return <WorkIntervalList workIntervals={this.props.workIntervals} onDelete={this.handleDelete}/>
      } else {
        return <p>Loading...</p>
      }
    }

    return (
      <div id='workInterval-list-pane'>
        {renderWorkIntervals()}
      </div>
    )
  }

}

const mapStateToProps = function (state) {
  return {
    accessToken: state.userState.accessToken,
    taskId: state.taskState.selectedTask,
    workIntervals: state.workIntervalState.workIntervals,
    shouldUpdate: state.taskState.taskContainerShouldUpdate || state.workIntervalState.workIntervalsContainerShouldUpdate
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    getWorkIntervalsSuccess: (workIntervals) => dispatch(getWorkIntervalsSuccess(workIntervals)),
    updateWorkIntervalsContainer: () => dispatch(updateWorkIntervalsContainer()),
    updateTaskStats: () => dispatch(updateTaskStats()),
    updateProjectStats: () => dispatch(updateProjectStats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkIntervalsContainer)