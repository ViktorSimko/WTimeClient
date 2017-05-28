import React from 'react'

class ProjectDetails extends React.Component {
  render() {
    let {title, description, hourlyWage} = this.props;

    let renderStats = () => {

      if (this.props.stats) {
        let {income, time} = this.props.stats;

        return (
          <div> 
            <p className='text'>Income: {income}</p>
            <p className='text'>Worked time: {time}</p>
          </div>
        )
      }

    }

    return (
      <div className='callout primary'>
        <h4 className='text-center'>{title}</h4>
        <p className='text'>{description}</p>
        <p className='text'>Hourly wage: {hourlyWage}</p>
        {renderStats()}
      </div>
    )
  }
}

export default ProjectDetails