import React from 'react'

class TaskDetails extends React.Component {
  render() {
    let {title, bonus} = this.props;

    return (
      <div className='callout primary'>
        <h4 className='text-center'>{title}</h4>
        <p className='text'>Bonus: {bonus}</p>
      </div>
    )
  }
}

export default TaskDetails