function meetings(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_MEETINGS':
      return [...state, action.meetings]
    default:
    return state
  }
}

export default meetings
