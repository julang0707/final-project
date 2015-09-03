import React from 'react';
import Router, {Route, DefaultRoute, RouteHandler, Link} from 'react-router';

import HuntApp from './components/app';
import Login from './components/login';
import Register from './components/register';
import GetStarted from './components/get-started';
import Admin from './components/admin';
import LocationBefore from './components/location-before'
import LocationArrive from './components/location-arrive'




var routes = (
  <Route handler={HuntApp} path="/">
    <DefaultRoute name="register" handler={Register} />
    <Route path="login" name="login" handler={Login} />
    <Route path="getstarted" name="getstarted" handler={GetStarted} />
    <Route path="admin" name="admin" handler={Admin} />
    <Route path="before" name="before" handler={LocationBefore} />
    <Route path="arrive" name="arrive" handler={LocationArrive} />
  </Route>
);


Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler {...state}/>, document.querySelector('.app'));
});
