import React from 'react';
import Router, {Route, DefaultRoute, RouteHandler, Link} from 'react-router';

import HuntApp from './components/app';
import Login from './components/login';
import Register from './components/register';


var routes = (
  <Route handler={HuntApp}>
    <DefaultRoute name="register" handler={Register} />
    <Route path="dashboard" name="login" handler={Login} />
  </Route>
);


Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler {...state}/>, document.querySelector('.app'));
});
