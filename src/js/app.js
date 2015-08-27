import React from 'react';
import Router from 'react-router';
const {State, Link} = Router;

import HuntApp from './components/app';
import Login from './components/login';
import Register from './components/register';


var routes = (
  <Route handler={HuntApp}>
    <DefaultRoute path="register" handler={Register} />
    <Route path="admin" handler={Admin} />
    <Route path="login" handler={Login} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});
