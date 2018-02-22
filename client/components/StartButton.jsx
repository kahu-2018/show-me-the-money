import React from 'react'
import { connect } from 'react-redux'
import Meeting from './Meeting'
import {startMeeting, secondTick} from '../actions/currentMeeting'
import {getAttendees} from '../actions/attendees'

let testData = [{first_name: 'Edi', last_name: 'Rose', wage: '16'}, {first_name: 'Jay', last_name: 'and', wage: '16'}, {first_name: 'Silent', last_name: 'Bob', wage: '18'}]

class StartButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMeeting:false,
      perSecWages:0
    }
    this.handleClick = this.handleClick.bind(this)
  }

handleClick() {
  this.setState({showMeeting:true})
  this.props.dispatch(startMeeting(this.props.attendees, this.props.meetingName, this.state.perSecWages))
  this.setTimer()
}

setTimer() {
setInterval(() => this.countTime (), 1000);
}

getWages(arr){
  let wages = arr.map(cell => cell.wage)
  return wages
}

setPerSecWages() {
console.log('heyhey')
 let wages = this.getWages(testData)
 const combinedWages = wages.reduce((a, b) => a + b)
 const perSecondWages = (combinedWages / 60) / 60
  this.setState({perSecWages: perSecondWages}) 
  console.log(this.state.perSecWages)
}

countTime() {
 this.props.dispatch(secondTick())
}

componentDidMount() {
  console.log('wahey')
  this.props.dispatch(getAttendees())
  this.setPerSecWages()
}

render () {
  return (
  <div className="container">
    <h2 className="title is-2">Start Meeting</h2>
    <div className="startButton">
      <button class="button" onClick={this.handleClick}>Start Meeting</button>
    </div>
  </div>
)
}
}

const mapStateToProps = (state) => {
  return {
    attendees:state.attendees,
    meetingName: meetingName
  }
}

export default connect()(StartButton)
