import React from 'react'
import {connect} from 'react-redux'
import CreateMeeting from './CreateMeeting'


function Meeting (props) {
  return <div className="container">
    <CreateMeeting />
  </div>
}

export default connect()(Meeting)
