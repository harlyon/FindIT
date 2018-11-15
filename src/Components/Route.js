import React from 'react';
import { Route } from 'react-router-dom';
// import Body from './Body'
import Main from './Main'
import Venue from './Venue'

const BaseRoute = () => {
    return (
        <div>
            <Route exact path = '/' component={Main} />
            <Route exact path = '/body' component={Venue} />
        </div>
    );
};

export default BaseRoute;