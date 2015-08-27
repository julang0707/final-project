import React from 'react';
import Router from 'react-router';
const {State, Link} = Router;

var RouteHandler = Router.RouteHandler;
var Route = Router.Route;

class HuntApp extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <h1>The Haystack</h1>
          <RouteHandler/>
        </header>
      </div>

    )
  }
};
