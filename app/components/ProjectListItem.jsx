import React from 'react'
import {Link} from 'react-router'

var ProjectListItem = (props) => {
  return (
    <div className='row'>
      <button id='project-list-item' className='button columns' onClick={() => props.onProjectSelected(props.id)}>{props.title}</button>
      <button className="button alert small-2 columns" onClick={() => props.onDelete(props.id)}>&times;</button>
    </div>
  )
}

export default ProjectListItem