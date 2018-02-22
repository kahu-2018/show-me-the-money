import React from 'react'
import {connect} from 'react-redux'

function PastMeeting () {
  return <div>
    <h1>Past Meeting</h1>
  </div>
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(PastMeeting)
