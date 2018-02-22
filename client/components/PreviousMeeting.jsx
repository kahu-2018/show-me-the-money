import React from 'react'
import {connect} from 'react-redux'

const PreviousMeeting = props => {
console.log(props.meeting)
  return (
    <div>
      <h1>Previous Meeting</h1>
      <p>{props.cost}</p>
    </div>
  )
}

export default PreviousMeeting
