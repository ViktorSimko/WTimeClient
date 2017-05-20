import React from 'react'

class Projects extends React.Component {
  render() {
    let renderProjects = () => {
      return this.props.projects.map((project) => <p key={project.id}>{project.title}</p>)
    }

    return (
      <div>
        {renderProjects()}
      </div>
    )
  }
}

export default Projects