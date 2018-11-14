import React from 'react';
import { Route } from 'react-router-dom';
import Main from './Main';
import Body from './Body';

const BaseRoute = () => {
    return (
        <div>
            <Route exact path = '/' component={Main} />
            <Route exact path = '/body' component={Body} />
        </div>
    );
};

export default BaseRoute;