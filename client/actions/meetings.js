import request from '../utils/api'

function receiveMeetings (meetings) {
  console.log('This is what I think meetings is')
  console.log(meetings)
  return {
    type: 'RECEIVE_MEETINGS',
    meetings
  }
}

function requestMeetings (meetings) {
  return {
    type: 'REQUEST_MEETING',
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
  return function (dispatch) {
    dispatch(requestMeetings())
    request('get', 'meetings')
    .then(res => {
      dispatch(receiveMeetings(res.body))
    })
    .catch(err => console.log(err.message))
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
