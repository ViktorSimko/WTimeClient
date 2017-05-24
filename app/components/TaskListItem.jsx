import React from 'react'
import {Link} from 'react-router'

var TaskListItem = (props) => {
  return (
    <div className='row'>
      <button id='task-list-item' className='button columns' onClick={() => props.onTaskSelected(props.id)}>{props.title}</button>
      <button className="button alert small-1 columns">&times;</button>
    </div>
  )
}

export default TaskListItem