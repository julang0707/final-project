import React, {PropTypes} from 'react';
import Parse from '../../parse';
import objectAssign from 'object-assign';

var FontAwesome = require('react-fontawesome');

import User from '../../user';
import Login from '../login/login';
import GetStarted from './get-started';
import Resume from './resume';

class Launch extends React.Component {
  componentDidMount() {
    var user = Parse.Object.extend("User");
    var query = new Parse.Query(User);
    query.get("activeLocation", {
      success: function(results) {
        console.log(results);
      },
      error: function(object, error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }

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
    if (User.loggedIn) {
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
