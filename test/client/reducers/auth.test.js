import auth from '../../../client/reducers/auth'
import { isAuthenticated, getUserTokenInfo } from '../../../client/utils/auth'

import '../setup-dom'

jest.mock('../../../client/utils/localstorage', () => ({
  get: (key) => ({key: 'test'}),
  set: (key, value) => true
}))

jest.mock('../../../client/utils/auth', () => ({
  isAuthenticated: () => true,
  getUserTokenInfo: () => ({id: 1, user_name: 'Maia'})
}))

const initialState = {
  isFetching: false,
  isAuthenticated: isAuthenticated(),
  user: getUserTokenInfo(),
  errorMessage: ''
}

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(auth(undefined, {})).toEqual(initialState)
  })

  it('should handle LOGIN_REQUEST', () => {
    const action = {
        type: 'LOGIN_REQUEST',
        isFetching: true,
        isAuthenticated: false,
        errorMessage: ''
    }
    const state = {...initialState, isAuthenticated: false}
    const expected = {...initialState, isFetching: true, isAuthenticated: false}
    expect(
      auth(initialState, action)
    ).toEqual(
      expected
    )
  })

  it('should handle LOGIN_SUCCESS', () => {
    const action = {
      type: 'LOGIN_SUCCESS',
      user: {"id": 1, user_name: 'Maia'}
    }
    const expected = {...initialState, user: {"id": 1, "user_name": "Maia"}}
    expect(
      auth(initialState, action)
    ).toEqual(
      expected
    )
  })

  it('should handle LOGIN_FAILURE', () => {
    const action = {
      type: 'LOGIN_FAILURE',
      message: "error"
    }
    const expected = {...initialState, isAuthenticated: false, errorMessage: "error"}
    expect(
      auth(initialState, action)
    ).toEqual(
      expected
    )
  })

  it('should handle LOGOUT_SUCCESS', () => {
    const action = {
      type: 'LOGOUT_SUCCESS',
      user: null
    }
    const expected = {...initialState, isFetching: false,
    isAuthenticated: false, user: null
}
    expect(
      auth(initialState,action)
    ).toEqual(
      expected
    )
  })

  it('should handle REGISTER_REQUEST', () => {
    const action = {
      type: 'REGISTER_REQUEST'
    }
    const expected = {...initialState, isAuthenticated: false, isFetching: true}
    expect(
      auth(initialState,action)
    ).toEqual(
      expected
    )
  })

  it('should handle REGISTER_FAILURE', () => {
    const action = {
      type: 'REGISTER_FAILURE',
      message: 'error'
    }
    const expected = {...initialState, isAuthenticated: false, errorMessage: 'error'}
    expect(
      auth(initialState,action)
    ).toEqual(
      expected
    )
  })

})
