import React from 'react'

import TaskListItem from 'TaskListItem'

class TaskList extends React.Component {

  render() {
    let renderTasks = () => {
      return this.props.tasks.map((task) => <TaskListItem key={task.id} {...task} onTaskSelected={this.props.onTaskSelected}/>)
    }

    return (
      <div>
        <div className='row'>
          <h3 className='text subheader columns'>Tasks</h3>
          <button id='task-list-add-button' className='button'>&#x2795;</button>
        </div>
        <div>
          {renderTasks()}
        </div>
      </div>
    )
  }
}

export default TaskList