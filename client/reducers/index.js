import {combineReducers} from 'redux'

import auth from './auth'
import attendees from './attendees'

export default combineReducers({
  auth,
  attendees
})
