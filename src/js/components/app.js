import React from 'react';
import Router, { RouteHandler } from 'react-router';

import Footer from './footer'

class HuntApp extends React.Component {

  render() {
    return (
      <div className="app-container">
        <main>
          <RouteHandler {...this.props}/>
        </main>
        <Footer/>
      </div>
    )
  }
}

HuntApp.contextTypes = {
  router: React.PropTypes.func
};

export default HuntApp;
