import React from 'react'

import ProjectListItem from 'ProjectListItem'

class ProjectList extends React.Component {
  render() {
    let renderProjects = () => {
      return this.props.projects.map((project) => <ProjectListItem key={project.id} {...project}/>)
    }

    return (
      <div className='row'>
        <div className='small-6 small-centered columns'>
          <div className='row'>
            <h4 className='text small-11 small-left columns'>Projects</h4>
            <button className='button hollow small-1 small-right columns'>+</button>
          </div>
          {renderProjects()}
        </div>
      </div>
    )
  }
}

export default ProjectList