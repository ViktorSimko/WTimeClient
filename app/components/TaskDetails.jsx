import React from 'react'

class TaskDetails extends React.Component {
  render() {
    let {title, bonus} = this.props;

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
        <p className='text'>Bonus: {bonus}</p>
        {renderStats()}
      </div>
    )
  }
}

export default TaskDetails