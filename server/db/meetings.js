<<<<<<< HEAD
function saveMeeting(meeting, db) {
  createMeeting(meeting)
  .then((ids) => {
    meetingId= ids[0]
    return addAttendeesToMeeting(meetingId, meeting)
  }
}

function createMeeting(meeting, db) {
=======
function saveMeeting(meeting) {
  createMeeting(meeting)
  addAttendeesToMeeting(meeting)
}

function createMeeting(meeting) {
>>>>>>> ba23537c950c7298151c4edaabd8d957e2f26ba4
  return db('meetings')
  .insert({meeting_name, cost, time, attendees: attendeesList.length})
}

<<<<<<< HEAD
function addAttendeesToMeeting(meetingId, attendeesList, db) {
  let userAttendees = attendeesList.filter(person => person.id)
  return db('attendees')
  .insert({user_id: userAttendees.id, meeting_id: meetingId})
}

=======
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


>>>>>>> ba23537c950c7298151c4edaabd8d957e2f26ba4
meeting: {
  meetingName: '',
  time: '2017-02-22T10:00:00NZDT',
  cost: 200.00,
  attendeesList: [{
    id:'',
    firstName: '',
    lastName: '',
    hourlyRate: 50.00
<<<<<<< HEAD
  }],
=======
  }]
>>>>>>> ba23537c950c7298151c4edaabd8d957e2f26ba4
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
