import React from 'react'
import moment from 'moment'

class ProjectDetails extends React.Component {
  render() {
    let {title, description, hourlyWage} = this.props;

    let renderStats = () => {

      if (this.props.stats) {
        let {income, time} = this.props.stats;

        let hours = Math.floor(time / 3600)
        time = time % 3600
        let mins = Math.floor(time / 60)
        time = time % 60
        let secs = time

        return (
          <div> 
            <p className='text'>Income: ${income}</p>
            <p className='text'>Worked time: {hours} hours {mins} minutes {secs} seconds </p>
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