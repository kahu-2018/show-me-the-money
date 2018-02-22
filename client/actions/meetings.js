// import request from 'superagent'
import request from '../utils/api'
import {saveUserToken} from '../utils/auth'

function receiveMeetings (meetings) {
  return {
    type: 'RECEIVE_MEETINGS',
    meetings
  }
}


function requestMeeting (meeting) {
  return {
    type: 'REQUEST_MEETING',
    meeting
  }
}

// export function getMeetings() {
//   return dispatch => {
//     request
//     .get('/api/meetings')
//     .end((err, res) => {
//       if (err) {
//         console.log(err.message)
//       }
//       console.log(res)
//     })
//   }
// }


export function getMeetings () {
  return function (dispatch) {
    dispatch(requestMeeting())
    request('get', 'meetings')
    .then(res => {
      console.log(res)
      dispatch(receiveMeetings(res.body))
    })
    .catch(err => console.log(err.message))
  }
}

// .then((response) => {
//   console.log(response)
// })
// .catch(err => {
//   console.log(err.message)
// })


// export function getMeetings () {
//   return dispatch => {
//     return request('get', 'meetings' )
//     .then((response) => {
//       console.log('This is the getMeetings Request')
//     })
//     .catch(err => {
//       console.log('ERROR: refer to getMeetings in meetings.js')
//     })
//   }
// }

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
