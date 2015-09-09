import React from 'react';
import Router, {Route, DefaultRoute, RouteHandler, Link} from 'react-router';

import HuntApp from './components/app';
import Login from './components/login/login';
import Register from './components/register/register';
import Admin from './components/admin/admin';
import LocationBefore from './components/location-before/location-before';
import LocationArrive from './components/location-arrive/location-arrive';
import Header from './components/header/header';
import Completed from './components/progress/completed';
import Launch from './components/progress/launch';




var routes = (
  <Route handler={HuntApp} path="/">
    <DefaultRoute name="register" handler={Register} />
    <Route path="login" name="login" handler={Login} />
    <Route path="launch" name="launch" handler={Launch} />
    <Route path="admin" name="admin" handler={Admin} />
    <Route path="before" name="before" handler={LocationBefore} />
    <Route path="arrive" name="arrive" handler={LocationArrive} />
    <Route path="completed" name="completed" handler={Completed} />
  </Route>
);


Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler {...state}/>, document.querySelector('.app'));
});
