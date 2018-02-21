import React from 'react'
import { connect } from 'react-redux'

class CreateMeeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      attendees: []
    }
    
    this.person = { name: '', wage: 0}
    this.updateTitle = this.updateTitle.bind(this)
    this.updateName = this.updateName.bind(this)
    this.updateWage = this.updateWage.bind(this)
    this.addAttendee = this.addAttendee.bind(this)
  }

  updateTitle(e) {
    this.setState({title: e.target.value})
  }

  updateName(e) {
    console.log('name: ', e.target.value)
    this.person.name = e.target.value
  }

  updateWage(e) {
    console.log('wage: ', e.target.value)
    this.person.wage = e.target.value
  }

  addAttendee(e) {
    console.log('person: ', this.person)
    let tmp = [...this.state.attendees].concat(this.person)
    this.setState({attendees: tmp})
    console.log('attendees: ', tmp)
    console.log('this.state.attendees: ', this.state.attendees)
    this.person.name = ''
    this.person.wage = 0
  }

  displayAttendees() {
    return this.state.attendees.map((person, i) => {
      <li key={i}>{person.name}, {person.wage}</li>
    })
  }

  render() {
    return (
      <div className="container">
        <h2 className="title is-2">Create Meeting</h2>
        <label for="title">Meeting title:</label>
        <input id="title" type="text" onChange={this.updateTitle} />
        <br />
        <ul>
          { this.displayAttendees }
        </ul>
        <h3>Add Attendent</h3>
        <label for="name">Attendee Name:</label>
        <input id="name" type="text" onChange={this.updateName} />
        <label for="wage">Attendee Wage:</label>
        <input id="wage" type="text" onChange={this.updateWage} />  
        <button onClick={this.addAttendee}>Add</button>
      </div >
    )
  }
}

export default connect()(CreateMeeting)
