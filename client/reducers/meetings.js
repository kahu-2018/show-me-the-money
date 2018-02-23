function meetings(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_MEETINGS':
      return [...action.meetings]
    default:
    return state
  }
}

export default meetings
