
export function launchMeeting (attendees, title, wages) {
  return {
    type: 'START_MEETING',
    attendees,
    title,
    wages
  }
}

export function endMeeting () {
  return {
    type: 'END_MEETING'
  }
}

export function secondTick () {
  return {
    type: 'TICK_ONE_SECOND'
  }
}

export function resetMeeting () {
  return {
    type: 'RESET_MEETING'
  }
}
