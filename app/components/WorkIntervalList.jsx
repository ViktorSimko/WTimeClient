import React from 'react'

import WorkIntervalListItem from 'WorkIntervalListItem'

class WorkIntervalList extends React.Component {

  render() {
    let renderWorkIntervals = () => {
      return this.props.workIntervals.map((workInterval) => <WorkIntervalListItem key={workInterval.id} {...workInterval}/>)
    }

    return (
      <div>
        <div className='row'>
          <h3 className='text subheader columns'>WorkIntervals</h3>
        </div>
        <div>
          {renderWorkIntervals()}
        </div>
      </div>
    )
  }
}

export default WorkIntervalList