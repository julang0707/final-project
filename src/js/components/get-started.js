import React, {PropTypes} from 'react';
import Parse from '../parse';

var FontAwesome = require('react-fontawesome');

import ActiveHeader from './active-header';
import User from '../user';

class GetStarted extends React.Component {
  render() {
    let message = "Please login.";

    if (User.loggedIn) {
      message = `Let's Get Started, ${User.firstName}.`;
    }

    return (
      <div className="getstarted">
        <header>
          <ActiveHeader/>
        </header>
        <section>
          <h2>{message}</h2>
          <button ref="started">Get Started</button>
        </section>
      </div>
    )
  }
};

GetStarted.contextTypes = {
    router: React.PropTypes.func
};

export default GetStarted;
