let initialState = {
    title: '',
    attendees: []
}

function attendees(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TITLE':
            return {
              title: action.title, attendees:[...state.attendees]
            }
        case 'ADD_ATTENDEE':
            return {
              title: state.title,
              attendees:[...state.attendees, action.attendee]
            }
        case 'REMOVE_ATTENDEE':
           let newAttendees = state.attendees.filter((attendee, i) => i !== action.index)

            return {
              title: state.title,
              attendees: [...newAttendees]
            }
        case 'GET_ATTENDEES':
            return state
        default:
            return state
    }
}

export default attendees
