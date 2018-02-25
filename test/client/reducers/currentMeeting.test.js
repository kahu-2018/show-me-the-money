import currentMeeting from '../../../client/reducers/currentMeeting'

const initialState = {
    attendees:[],
    wages:0,
    meetingName:'',
    meetingRunning:false,
    totalSpend: 0,
    timer:0
  }

describe('currentMeeting reducer', () => {
  it('should return the initial state', () => {
    expect(currentMeeting(undefined, {})).toEqual(
      initialState
    )
  })

  it('should handle START_MEETING', () => {
    const action = {
        type: 'START_MEETING',
        attendees: ['Maia', 'Ross'],
        meetingName: 'First Meeting',
        wages: '100'
    }
    expect(
      currentMeeting(initialState, action)
    ).toEqual({
      attendees: ['Maia', 'Ross'],
      meetingName: 'First Meeting',
      wages: '100',
      meetingRunning: true,
      totalSpend: 0,
      timer: 0
    })
  })

  it('should handle END_MEETING', () => {
    const action = {
      type: 'END_MEETING'
    }
    const state = {...initialState, meetingRunning: true}
    const expected = {...initialState, meetingRunning: false}
    expect(
      currentMeeting(state, action)
    ).toEqual(
      expected
    )
  })

  it('should handle TICK_ONE_SECOND', () => {
    const action = {
      type: 'TICK_ONE_SECOND'
    }
    const state = {...initialState, wages: 100}
    const expected = {...initialState, wages: 100, totalSpend: 100, timer: 1}
    expect(
      currentMeeting(state, action)
    ).toEqual(
      expected
    )
  })

  it('should handle RESET_MEETING', () => {
    const action = {
      type: 'RESET_MEETING'
    }
    expect(
      currentMeeting(initialState, action)
    ).toEqual(
      initialState
    )
  })

})
