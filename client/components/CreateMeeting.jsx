import React from 'react'
import { connect } from 'react-redux'

class CreateMeeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      attendees: [],
      count: 0
    }

    this.updateTitle = this.updateTitle.bind(this)
    this.addAttendee = this.addAttendee.bind(this)
    this.displayAttendees = this.displayAttendees.bind(this)
  }

  updateTitle(e) {
    this.setState({ title: e.target.value })
  }


  addAttendee(e) {
    console.log('formName: ', this.refs.formName.value)
    let person = {
      name: this.refs.formName.value,
      wage: this.refs.formWage.value
    }
    this.refs.formName.value = ''
    this.refs.formWage.value = ''
    console.log('before this.state.attendees: ', this.state.attendees)
    console.log('person: ', person)
    let newAttendees = [...this.state.attendees, person]
    console.log('newAttendees: ', newAttendees)
    this.setState({
      attendees: newAttendees,
      count: this.state.count++
    })
    console.log('this.state.attendees: ', this.state.attendees)
  }

  displayAttendees() {
    console.log('result: ', results)
    let samples = [
      { name: 'happy', wage: '300' },
      { name: 'hello', wage: '400' }
    ]
    let results = samples.map((person, i) => {
      return <li key={i}>{person.name}, {person.wage}</li>
    })
    return <ul>{results}</ul>
    // return this.state.attendees.map((person, i) => {
    //   return <li key={i}>{person.name}, {person.wage}</li>
    // })
  }

  render() {
    return (
      <div className="container">
        <h2 className="title is-2">Create Meeting</h2>
        <div>
          <label>Meeting title:</label>
          <input ref="formTitle" type="text" onChange={this.updateTitle} />
        </div>
        <br />
        <div>
          <h4 className="title is-4">Add Attendent</h4>
          <label>Name:</label>
          <input ref="formName" type="text" /><br/>
          <label>Wage:</label>
          <input ref="formWage" type="text" /><br />
          <button onClick={this.addAttendee}>Add</button>
        </div>
        <br />
        <div>
        <h4 className="title is-4">Attendee list</h4>
        {this.displayAttendees()}
        </div>
      </div >
    )
  }
}

export default connect()(CreateMeeting)
