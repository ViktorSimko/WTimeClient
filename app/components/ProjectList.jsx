import React from 'react'

import ProjectListItem from 'ProjectListItem'

class ProjectList extends React.Component {

  render() {
    let renderProjects = () => {
      return this.props.projects.map((project) => <ProjectListItem key={project.id} {...project} onProjectSelected={this.props.onProjectSelected}/>)
    }

    return (
      <div>
        <div className='row'>
          <h3 className='text subheader columns'>Projects</h3>
          <button id='project-list-add-button' className='button' onClick={this.props.onAddProject}>&#x2795;</button>
        </div>
        <div>
          {renderProjects()}
        </div>
      </div>
    )
  }
}

export default ProjectList