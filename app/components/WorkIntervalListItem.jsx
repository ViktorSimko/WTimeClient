import React from 'react'
import {Link} from 'react-router'
import moment from 'moment'

var WorkIntervalListItem = (props) => {

  let startDate = moment(props.begin).format('YYYY-MM-DD h:m:s')
  let minutes = Math.floor(props.duration / 60)
  let seconds = props.duration % 60

  return (
    <div className='row callout secondary'>
      <div id='work-interval-list-item' className='columns'>Start: {startDate}</div>
      <div id='work-interval-list-item' className='columns text-right'>Duration: {minutes} min {seconds} sec </div>
      <button className="button alert small-1 columns">&times;</button>
    </div>
  )
}

export default WorkIntervalListItem