import React, {PropTypes} from 'react';
import Parse from '../../parse';

var FontAwesome = require('react-fontawesome');

import User from '../../user';
import Login from '../login/login';

class GetStarted extends React.Component {

  onSubmit() {
    var Location = Parse.Object.extend("Locations");
    var query = new Parse.Query(Location);
    query.equalTo("order", User.currentOrder);
    query.find({
      success: (results) => {
        var user = Parse.User.current();
        var relation = user.relation("activeLocation");
        relation.add(results);
        user.save().then(() => {
          this.context.router.transitionTo('before');
        });
      },
      error: (error) => {
        alert("Error: " + error.code + " " + error.message);
      }
    });


  }

  render() {
    let message = "Please login.";

    if (User.loggedIn) {
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

GetStarted.contextTypes = {
    router: React.PropTypes.func
};

export default GetStarted;
