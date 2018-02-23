import {combineReducers} from 'redux'

import auth from './auth'
import meetings from './meetings'
import users from './users'

export default combineReducers({
  auth,
  meetings,
  users
})
