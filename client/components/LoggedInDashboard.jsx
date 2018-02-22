import React from 'react';

import Header from './Header'


const loggedInDashboard = (props) => (
    <div>
        <Header />
        <div className="columns">
            <div className="column"><Link to={'/history'}>History</Link></div>
            <div className="column"><Link to={'/meeting'}>Meeting</Link></div>
            <div className="column"><Link to={'/profile'}>Profile</Link></div>
        </div>
    </div>
);

export default loggedInDashboard;