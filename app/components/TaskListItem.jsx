import React from 'react'
import {Link} from 'react-router'

var TaskListItem = (props) => {
  return (
    <div className='row'>
      <button id='task-list-item' className='button expanded' onClick={() => props.onTaskSelected(props.id)}>{props.title}</button>
    </div>
  )
}

export default TaskListItem