import {combineReducers} from 'redux'

import auth from './auth'
import targetUser from './profile'

export default combineReducers({
  auth,
  targetUser
})
