import React, {PropTypes} from 'react';
import Parse from '../parse';

var FontAwesome = require('react-fontawesome');

import User from '../user';

class GetStarted extends React.Component {

  onSubmit() {
    this.context.router.transitionTo('before');
  }

  render() {
    let message = "Please login.";

    if (User.loggedIn) {
      message = `Let's Get Started, ${User.firstName}.`;
    }

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
};

GetStarted.contextTypes = {
    router: React.PropTypes.func
};

export default GetStarted;
