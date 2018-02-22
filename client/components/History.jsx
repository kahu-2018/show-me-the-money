import React from 'react'
import {connect} from 'react-redux'
import {getMeetings} from '../actions/meetings'

// function History (props) {
//   return <div className="container">
//     <h2 className="title is-2">Meeting history</h2>
//   </div>
// }

class History extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.dispatch(getMeetings())
  }
  render() {
    return <div className="container">
    <h2 className="title is-2">Meeting history</h2>
    </div>
  }
}



export default connect()(History)
