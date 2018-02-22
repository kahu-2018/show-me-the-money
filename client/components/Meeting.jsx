import React from 'react'
import {connect} from 'react-redux'


function Meeting (props) {

  return <div className="container">
    
    <h2 className="title is-2">Start Meeting</h2>
    <div className="MeetingButtons">
      <button class="button">End Meeting</button>
      <button class="button">Reset Meeting</button>
    </div>
  </div>
}

export default connect()(Meeting)
