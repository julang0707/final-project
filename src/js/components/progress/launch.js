import React, {PropTypes} from 'react';
import Parse from '../../parse';
import objectAssign from 'object-assign';

var FontAwesome = require('react-fontawesome');

import User from '../../user';
import Login from '../login/login';
import GetStarted from './get-started';
import Resume from './resume';

class Launch extends React.Component {

  render() {
    let message = "Please login.";
    if (User.loggedIn && User.currentOrder === 1) {
      message = `Let's Get Started, ${User.firstName}.`;
      return (
        <div className="getstarted">
          <GetStarted/>
        </div>
      )
    }
    if (User.loggedIn && User.CurrentLocation > 1) {
      message = `Let's Continue, ${User.firstName}.`;
      return (
        <div className="resume">
          <Resume/>
        </div>
      )
    }
    return (

      this.context.router.transitionTo('login')

    )
  }
};

Launch.contextTypes = {
    router: React.PropTypes.func
};

export default Launch;
