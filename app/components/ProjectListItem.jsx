import React from 'react'
import {Link} from 'react-router'

var ProjectListItem = (props) => {
  return (
    <div className='row'>
      <button id='project-list-item' className='button expanded' onClick={() => props.onProjectSelected(props.id)}>{props.title}</button>
    </div>
  )
}

export default ProjectListItem