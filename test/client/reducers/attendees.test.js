import attendees from '../../../client/reducers/attendees'

describe('attendees reducer', () => {
  it('should return the initial state', () => {
    expect(attendees(undefined, {})).toEqual([])
  })

  it('should handle ADD_ATTENDEE', () => {
    const addAction = {
        type: 'ADD_ATTENDEE',
        attendee: 'Maia'
    }
    expect(
      attendees(['Ross'], addAction)
    ).toEqual(
      ['Ross', 'Maia']
    )
  })

  it('should handle REMOVE_ATTENDEE', () => {
    const removeAction = {
      type: 'REMOVE_ATTENDEE',
      index: 0
    }
    expect(
      attendees(['Ross', 'Maia'], removeAction)
    ).toEqual(
      ['Maia']
    )
  })

  it('should handle GET_ATTENDEES', () => {
    const getAction = {
      type: 'GET_ATTENDEES',
    }
    expect(
      attendees(['Ross', 'Maia'], getAction)
    ).toEqual(
      ['Ross', 'Maia']
    )
  })

})
