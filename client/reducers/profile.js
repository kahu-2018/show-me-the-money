
const initialState = {
  targetUser: null
}

function attendees(state = [], action) {
    switch (action.type) {
        case 'RECEIVE_USER':
            return [...state, action.attendee]
        case 'RECEIVE_USER':
            return state.filter((attendee, i) => i !== action.index)

        default:
            return state
    }
}

export default attendees
