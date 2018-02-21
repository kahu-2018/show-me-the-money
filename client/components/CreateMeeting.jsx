import React from 'react'
import { connect } from 'react-redux'

class CreateMeeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      attendees: []
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateTitle = this.updateTitle.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(e.target.value)
  }

  updateTitle(e) {
    this.setState({title: e.target.value})
  }


  render() {
    return (
      <div className="container">
        <h2 className="title is-2">Create Meeting</h2>
        <form onSubmit={this.handleSubmit}>
          <label for="title">Meeting title:</label>
          <input id="title" type="text" onChange={this.updateTitle} />
          <br />
          <input type="submit" />
        </form >
      </div >
    )
  }
}

export default connect()(CreateMeeting)
