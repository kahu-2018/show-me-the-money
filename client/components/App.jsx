import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import History from './History'
import StartMeeting from './StartMeeting'
import PastMeeting from './PastMeeting'

const App = ({auth}) => (
  <div>
    <Router>
      <div className="container has-text-centered">

        <div className="hero is-small is-primary">
          <div className="hero-body has-text-centered">
            <Link to='/' className="">
              <h1 className="title is-1">$how Me The Money</h1>
            </Link>
            <Nav />
          </div>
        </div>

      <div className=''>
        {!auth.isAuthenticated &&
          <Route exact path="/" component={Login} />
        }
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/meeting" component={StartMeeting} />
        <Route path="/history" component={History} />
        <Route path="/history/:id" component={PastMeeting}/>
      </div>

      </div>
    </Router>
    
  </div>
)

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
