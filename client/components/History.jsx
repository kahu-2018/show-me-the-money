import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// import in subcomponents
import PreviousMeeting from './PreviousMeeting'

const oldMeetings = [{id: 0, time: '12/02/2018', cost: 55, meeting_name: 'Jim', attendees: 5}, {id: 1, time: '13/02/2018', cost: 65, meeting_name: 'Bob', attendees: 10}, {id: 2, time: '14/02/2018', cost: 75, meeting_name: 'Mary', attendees: 15}]

class History extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      meeting: []
    }
    // Functions bound
  }

  componentDidMount() {
    // Run request for previous meetings
  }



  render () {
    return <div>
      <h2 className="title is-2">Previous Meetings</h2>
      {oldMeetings.map((meeting, i) => {
        return <li key={i}><Link to={`/history/${this.state.meeting}`} meetingDetails={meeting}>{meeting.time}</Link></li>
      })}
    </div>
  }
}

const mapStateToProps = state => {
  return {selectedMeeting: state.meeting}
}

export default connect(mapStateToProps)(History)
