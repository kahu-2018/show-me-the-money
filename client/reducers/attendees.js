let initialState = {
    title: '',
    attendees: []
}

function attendees(state = initialState, action) {
    console.log('Attendees Reducer Firing')
    switch (action.type) {
        case 'ADD_TITLE':
            return {
              title: action.title, attendees:[...state.attendees]
            }
        case 'ADD_ATTENDEE':
        console.log('add attendee reducer')
            return {
              title: state.title,
              attendees:[...state.attendees, action.attendee]
            }
        case 'REMOVE_ATTENDEE':
            return {
              title: state.title,
              attendees: state.attendees.filter((attendee, i) => i !== action.index)
            }
        case 'GET_ATTENDEES':
            return state
        default:
            return state
    }
}

export default attendees
