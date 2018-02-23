
function startMeeting (attendees, meeting_name) {
  return {
    type: 'START_MEETING',
    attendees,
    meeting_name,
  }
}

export function endMeeting () {
  return {
    type: 'END_MEETING',
  }
}

function secondTick () {
  return {
    type: 'TICK_ONE_SECOND',
  }
}

function resetMeeting () {
  return {
    type: 'RESET_MEETING',
  }
}