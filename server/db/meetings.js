const {getUserByName} = require('./users')

function saveMeeting(meeting, db) {
  createMeeting(meeting)
  .then((ids) => {
    meetingId= ids[0]
    return addAttendeesToMeeting(meetingId, meeting)
  })
}

function createMeeting(meeting, db) {
  return db('meetings')
  .insert({meeting_name, cost, time, duration, attendees: attendeesList.length})
}

function addAttendeesToMeeting(meetingId, attendeesList, db) {
  let userAttendees = attendeesList.filter(person => person.id)
  return db('attendees')
  .insert({user_id: userAttendees.id, meeting_id:
  })

  return db('meetings')
  .insert({meeting_name, cost, time, attendees: attendeesList.length}).into('meetings')
  .insert(into users table with attendeesArr, ).into('users')
  .insert(then join table with meetingid and userid).into('attendees')
}

function getAttendees(meetingId, db) {
  return db('users')
  .join('attendees', 'users.id', '=', 'attendees.user_id')
  .where('attendees.meeting_id', meetingId)
  .select('users.user_name', 'users.first_name', 'users.last_name', 'users.hourly_wage')
}

function getUserHistory(req, db) {
  return getUserByName(req.user.user_name, db ).then(user => {
    return db('meetings')
    .join('attendees', 'meetings.id', '=', 'attendees.meeting_id')
    .where('attendees.user_id', user.id)
    .select('meetings.*')

  })
}


module.exports = {
  saveMeeting,
  getAttendees,
  getUserHistory
}
