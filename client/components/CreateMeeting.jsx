import React from 'react'
import { connect } from 'react-redux'
import {addAttendee, addTitle, removeAttendee} from '../actions/attendees'

class CreateMeeting extends React.Component {
  constructor(props) {
    super(props)
    this.updateTitle = this.updateTitle.bind(this)
    this.addAttendee = this.addAttendee.bind(this)
    this.displayAttendees = this.displayAttendees.bind(this)
  }

  updateTitle(e) {
    let title = e.target.value
    this.props.dispatch(addTitle({title}))
  }


  addAttendee(e) {
    let person = {
      name: this.refs.formName.value,
      wage: this.refs.formWage.value
    }
    console.log(person)
    this.refs.formName.value = ''
    this.refs.formWage.value = ''
    this.props.dispatch(addAttendee(person))
 }


  onRemovePerson(i) {
    this.props.dispatch(removeAttendee(i))
  }

  displayAttendees() {
    console.log('props: ', this.props)
    console.log('display', this.props.attendees.attendees)
    return this.props.attendees.attendees.map((person, i) => {
        return <li key={i}>{person.name}, {person.wage} <button onClick={()=>this.onRemovePerson(i)}>Remove</button></li>
    })
  }

  render() {
    return (
      <div className="container">
        <h2 className="title is-2">Create Meeting</h2>
        <div>
          <label>Meeting title:</label>
          <input ref="formTitle" type="text" onChange={ this.updateTitle} />
        </div>
        <br />
        <div>
          <h4 className="title is-4">Add Attendee</h4>
          <label>Name:</label>
          <input ref="formName" type="text" /><br />
          <label>Wage:</label>
          <input ref="formWage" type="text" /><br />
          <button onClick={this.addAttendee}>Add</button>
        </div>
        <br />
        <div>
          <h4 className="title is-4">Attendee list</h4>
          <ul>
            {this.displayAttendees()}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state){

  console.log(state)
 return {
   title: state.title,
   attendees:state.attendees
 }
}

export default connect(mapStateToProps)(CreateMeeting)
