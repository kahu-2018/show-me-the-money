
export function addAttendee (attendee) {
  console.log('action firing')
  console.log(attendee)
  return {
    type:'ADD_ATTENDEE',
    attendee:attendee
  }
}

export function addTitle (title) {
  return {
    type:'ADD_TITLE',
    title
  }
}

export function removeAttendee (i) {
  return {
    type:'REMOVE_ATTENDEE',
    i
  }
}

export function getAttendees() {
  return {
    type:'GET_ATTENDEES'
  }
}
