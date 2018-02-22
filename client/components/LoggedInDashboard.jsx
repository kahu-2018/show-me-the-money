// import React from 'react';

// import Header from './Header'


// const loggedInDashboard = (props) => {
//     return (
//     <div>
//         <Header />
//         <div className="columns">
//             <div className="column"><Link to={'/history'}>History</Link></div>
//             <div className="column"><Link to={'/meeting'}>Meeting</Link></div>
//             <div className="column"><Link to={'/profile'}>Profile</Link></div>
//         </div>
//     </div>
// )}

// export default loggedInDashboard;

import React from 'react'
import {connect} from 'react-redux'

function LoggedInDashboard (props) {
  return <div>
           <Header />
           <div className="columns">
               <div className="column"><Link to={'/history'}>History</Link></div>
               <div className="column"><Link to={'/meeting'}>Meeting</Link></div>
               <div className="column"><Link to={'/profile'}>Profile</Link></div>
           </div>
       </div>
}

export default connect()(LoggedInDashboard)