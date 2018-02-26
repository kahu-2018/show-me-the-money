import meetings from '../../../client/reducers/meetings'

describe('meetings reducer', () => {
  it('should return the initial state', () => {
    expect(meetings(undefined, {})).toEqual([])
  })

  it('should handle RECEIVE_MEETINGS', () => {
    const action = {
      type: 'RECEIVE_MEETINGS',
      meetings: 'First Meeting'
    }
    expect(
      meetings(undefined, action)
    ).toEqual(
        ['First Meeting']
    )
  })

})
