import request from '../utils/api'

function receiveUser (user) {
  return {
    type: 'RECEIVE_USER',
    user
  }
}

export function getUser (userId) {
  return function (dispatch) {
    request('get', 'users', userId)
    .then(res => {
      dispatch(receiveUser(res.body))
    })
    .catch(err => dispatch(usersError(err.message)))
  }
  console.log(res.body)
}
