import React, {PropTypes} from 'react';
import Parse from '../../parse';
import objectAssign from 'object-assign';

var FontAwesome = require('react-fontawesome');

import User from '../../user';
import Login from '../login/login';
import GetStarted from './get-started';
import Resume from './resume';

class Launch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: '',
    }
  }

  componentDidMount() {
    var user = Parse.User.current();
    var relation = user.relation("activeLocation");
    var self = this;
    var query = relation.query();
    query.find({
      success: (child) => {
        let order = child[0].attributes.order
        let currentLocation = objectAssign({}, child[0].attributes, {
          id: child.id,
          order: order
        });
        console.log(order);
        self.setState(currentLocation);
      },
      error: function(object, error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }

  render() {
    let {order} = this.state;
    let message = "Please login.";
    if (User.loggedIn && this.state.order === '') {
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
