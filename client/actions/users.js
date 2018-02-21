import request from '../utils/api'
import { saveUserToken} from '../utils/auth'

function receiveUsers (users) {
  return {
    type: 'RECEIVE_USERS',
    users
  }
}

export function getUsers () {
  console.log('I am getUsers')
  return dispatch => {
    return request('get', 'users' )
    .then((response) => {
      console.log('This is the getUsers Request')
    })
    .catch(err => {
      console.log('ERROR: refer to getUsers in users.js')
    })
  }
}
