import request from '../utils/api'
import { saveUserToken } from '../utils/auth'

function receiveMeetings (meetings) {
  return {
    type: 'RECEIVE_MEETINGS',
    meetings
  }
}


function addMeeting (meeting) {
  return {
    type: 'ADD_MEETING',
    meeting
  }
}

export function getMeetings () {
  return dispatch => {
    return request('get', 'meetings' )
    .then((response) => {
      console.log('This is the getMeetings Request')
    })
    .catch(err => {
      console.log('ERROR: refer to getMeetings in meetings.js')
    })
  }
}

export function postMeeting () {
  console.log('I am the postMeeting function')
  return dispatch => {
    return request('post', 'meetings')
      .then((response) => {
        console.log('Added a metting')
      })
      .catch(err => {
        console.log(err)
      })
  }
}
