import React, {PropTypes} from 'react';
import Parse from '../../parse';

var FontAwesome = require('react-fontawesome');

import User from '../../user';
import Login from '../login/login';

class Launch extends React.Component {

  componentDidMount() {
    console.log(User.currentOrder);
    var user = Parse.User.current();
    var relation = user.relation("activeLocation");
    var self = this;
    var query = relation.query();
    query.equalTo("order", User.currentOrder);
    query.find({
      success: function(child) {
        console.log(child);
        let activeLocation = objectAssign({}, child[0].attributes, {
          id: child.id,
        });
        self.setState(activeLocation);
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }

  render() {
    let message = "Please login.";

    if (activeLocation === null) {
      message = `Let's Get Started, ${User.firstName}.`;
      return (
        <div className="getstarted">
          <section>
            <h2>{message}</h2>
            <p>You're about to go on a fun adventure through Downtown Nashville. There are 10 stops on the adventure.  Here's what you need to know.</p>
            <ul>
              <li>Walking directions from one stop to the next are provided</li>
              <li>Enter an unlock code to reveal the next location</li>
              <li>Have fun and enjoy Nashville!</li>
            </ul>
            <button onClick={this.onSubmit.bind(this)} ref="started">Get Started</button>
          </section>
        </div>
      )
    }
    return (
      <div className="getstarted">
          {message}
      </div>
    )
  }
};

Launch.contextTypes = {
    router: React.PropTypes.func
};

export default Launch;
