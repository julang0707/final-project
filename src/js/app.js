import React from 'react';
import Router, {Route, DefaultRoute, RouteHandler, Link} from 'react-router';

import HuntApp from './components/app';
import Login from './components/login/login';
import Register from './components/register/register';
import LocationBefore from './components/location-before/location-before';
import LocationArrive from './components/location-arrive/location-arrive';
import Header from './components/header/header';
import Completed from './components/progress/completed';
import Launch from './components/progress/launch';
import Details from './components/progress/details';




var routes = (
  <Route handler={HuntApp} path="/">
    <Route path="register" name="register" handler={Register} />
    <DefaultRoute name="details" handler={Details}/>
    <Route path="login" name="login" handler={Login} />
    <Route path="launch" name="launch" handler={Launch} />
    <Route path="before" name="before" handler={LocationBefore} />
    <Route path="arrive" name="arrive" handler={LocationArrive} />
    <Route path="completed" name="completed" handler={Completed} />
  </Route>
);


Router.run(routes, Router.HashLocation, (Handler, state) => {
  React.render(<Handler {...state}/>, document.querySelector('.app'));
});
