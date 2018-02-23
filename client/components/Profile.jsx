import React from 'react'
import { connect } from 'react-redux'
import { getUser } from '../actions/profile'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
    this.props.dispatch(getUser(this.props.auth.user.user_name))
  }

  render(props) {
    console.log('props', this.props)
    return (
      <div className="container">
        <h2 className="title is-2"></h2>
        <div>
        </div>
        <br />
        <div>
          <h4 className="title is-4">Attendee list</h4>

        </div>
      </div>
    )
  }
}

const mapStateToProps = ({auth, targetUser}) => {
  console.log('target', targetUser)
  return {
    auth,
    targetUser
  }
}

export default connect(mapStateToProps)(Profile)
