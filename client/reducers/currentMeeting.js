const initialState = {
  attendees:[],
  wages:0,
  meetingName:'',
  meetingRunning:false,
  totalSpend: 0,
  timer:0
}

export default function currentMeeting(state=initialState, action) {
  let newState = {...state}
  switch (action.type) {
    case 'START_MEETING':
      newState.attendees = action.attendees
      newState.wages = action.wages
      newState.meetingName = action.meetingName
      newState.meetingRunning = true
      return newState
    case 'END_MEETING':
      newState.meetingRunning = false
      return newState
    case 'TICK_ONE_SECOND':
      newState.totalSpend += newState.wages
      newState.timer ++
      return newState
    case 'RESET_MEETING':
      return newState=initialState
    default:
      return state
  }
}
