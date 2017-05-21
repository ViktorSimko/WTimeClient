import React from 'react'

class ProjectDetails extends React.Component {
  render() {
    let {title, description, hourlyWage} = this.props;

    return (
      <div className='row'>
        <div className='small-6 small-centered columns'>
          <div className='row'>
            <h4 className='text-center'>{title}</h4>
          </div>
          <div className='row'>
            <p className='text'>{description}</p>
          </div>
          <div className='row'>
            <p className='text'>Hourly wage: {hourlyWage}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectDetails