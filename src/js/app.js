import React from 'react';
import Router, {Route, DefaultRoute, RouteHandler, Link} from 'react-router';

import HuntApp from './components/app';
import Login from './components/login/login';
import Register from './components/register/register';
import GetStarted from './components/progress/get-started';
import Admin from './components/admin/admin';
import LocationBefore from './components/location-before/location-before';
import LocationArrive from './components/location-arrive/location-arrive';
import Header from './components/header/header';
import Resume from './components/progress/resume';
import Completed from './components/progress/completed';




var routes = (
  <Route handler={HuntApp} path="/">
    <DefaultRoute name="register" handler={Register} />
    <Route path="login" name="login" handler={Login} />
    <Route path="getstarted" name="getstarted" handler={GetStarted} />
    <Route path="admin" name="admin" handler={Admin} />
    <Route path="before" name="before" handler={LocationBefore} />
    <Route path="arrive" name="arrive" handler={LocationArrive} />
    <Route path="resume" name="resume" handler={Resume} />
    <Route path="completed" name="completed" handler={Completed} />
  </Route>
);


Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler {...state}/>, document.querySelector('.app'));
});
