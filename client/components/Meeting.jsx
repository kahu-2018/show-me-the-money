import React from 'react'
import {connect} from 'react-redux'
import CreateMeeting from './CreateMeeting'


function Meeting (props) {

  return <div className="container">
    <CreateMeeting /> //need to move this to app or start button as meeting is child of startbutton
    <h2 className="title is-2">Start Meeting</h2>
    <div className="startButton">
      <button class="button">Start Meeting</button>
      <button class="button">End Meeting</button>
      <button class="button">Reset Meeting</button>
    </div>

  </div>
)
}

export default connect()(Meeting)
