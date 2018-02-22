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
  .insert({meeting_name, cost, time, attendees: attendeesList.length})
}

function addAttendeesToMeeting(meetingId, attendeesList, db) {
  let userAttendees = attendeesList.filter(person => person.id)
  return db('attendees')
  .insert({user_id: userAttendees.id, meeting_id: meetingId})
}

function getAttendees(meetingId, db) {
  return db('users')
  .join('attendees', 'users.id', '=', 'attendees.user_id')
  .where('attendees.meeting_id', meetingId)
  .select('users.*')
}

function getUserHistory(db) {
  getUserByName(req.user.user_name, db ).then(user => {
    return db('meetings')
    .join('attendees', 'meetings.id', '=', 'attendees.meeting_id')
    .where('attendees.user_id', userId)
    .select('meetings.*')

  })
}


module.exports = {
  saveMeeting,
  getAttendees,
  getUserHistory
}
