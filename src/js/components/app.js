import React from 'react';
import Router, { RouteHandler } from 'react-router';

import Footer from './footer/footer';
import Header from './header/header';

class HuntApp extends React.Component {

  render() {
    return (
      <div className="app-container">
        <header>
          <Header/>
        </header>
        <main>
          <RouteHandler {...this.props}/>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    )
  }
}

HuntApp.contextTypes = {
  router: React.PropTypes.func
};

export default HuntApp;
