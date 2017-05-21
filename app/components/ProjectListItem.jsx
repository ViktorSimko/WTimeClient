import React from 'react'
import {Link} from 'react-router'

var ProjectListItem = (props) => {
  return (
    <div className='row'>
      <Link to={`/project/${props.id}`} className='button small-8 columns'>{props.title}</Link>
      <button className='button hollow small-2 columns'>Edit</button>
      <button className='button alert small-2 columns'>Delete</button>
    </div>
  )
}

export default ProjectListItem