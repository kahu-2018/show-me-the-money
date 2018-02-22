function saveMeeting(meeting) {
  createMeeting(meeting)
  addAttendeesToMeeting(meeting)
}

function createMeeting(meeting) {
  return db('meetings')
  .insert({meeting_name, cost, time, attendees: attendeesList.length})
}

function addAttendeesToMeeting(meeting) {
  let userAttendees = attendeesList.filter(person => person.id)
  return db('attendees')
  .insert({user_id: userAttendees.id, meeting_id:
  })

  })
}


return db('meetings')
.insert({meeting_name, cost, time, attendees: attendeesList.length}).into('meetings')


.insert(into users table with attendeesArr, ).into('users')
.insert(then join table with meetingid and userid).into('attendees')


meeting: {
  meetingName: '',
  time: '2017-02-22T10:00:00NZDT',
  cost: 200.00,
  attendeesList: [{
    id:'',
    firstName: '',
    lastName: '',
    hourlyRate: 50.00
  }]
}



function getAttendees(meetingId, db) {
  return db('users')
  .join('attendees', 'users.id', '=', 'attendees.user_id')
  .where('attendees.meeting_id', meetingId)
  .select('users.*')
}

function getUserHistory(userId, db) {
  return db('meetings')
  .join('attendees', 'meetings.id', '=', 'attendees.meeting_id')
  .where('attendees.user_id', userId)
  .select('meetings.*')
}


module.exports = {
  saveMeeting,
  getAttendees,
  getUserHistory
}
