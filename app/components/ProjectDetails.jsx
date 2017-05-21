import React from 'react'

class ProjectDetails extends React.Component {
  render() {
    let {title, description, hourlyWage} = this.props;

    return (
      <div className='callout primary'>
        <h4 className='text-center'>{title}</h4>
        <p className='text'>{description}</p>
        <p className='text'>Hourly wage: {hourlyWage}</p>
      </div>
    )
  }
}

export default ProjectDetails