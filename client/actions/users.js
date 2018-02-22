import request from '../utils/api'
import { saveUserToken} from '../utils/auth'

function receiveUsers (users) {
  return {
    type: 'RECEIVE_USERS',
    users
  }
}

function requestUsers (users) {
  return {
    type: 'REQUEST_USERS',
    users
  }
}

function usersError(users) {
  return {
    type: 'MEETING_ERROR',
    meeting
  }
}

export function getUsers () {
  return function (dispatch) {
    dispatch(requestUsers())
    request('get', 'users')
    .then(res => {
      dispatch(receiveUsers(res.body))
    })
    .catch(err => dispatch(usersError(err.message)))
  }
}
