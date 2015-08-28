import React from 'react';
import Router, { RouteHandler } from 'react-router';

class HuntApp extends React.Component {

  render() {
    return (
      <div className="app-container">
        <header>
          <h1>The Haystack</h1>
        </header>
        <main>
          <RouteHandler {...this.props}/>
        </main>
        <footer>
          &copy; 2015.
        </footer>
      </div>
    )
  }
}

HuntApp.contextTypes = {
  router: React.PropTypes.func
};

export default HuntApp
