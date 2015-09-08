import React, {PropTypes} from 'react';
import Parse from '../../parse';

var FontAwesome = require('react-fontawesome');

import User from '../../user';

class Completed extends React.Component {

  render() {
    let message = "Please login.";

    if (User.loggedIn) {
      message = `${User.firstName}, you completed The Haystack`;
    }

    return (
      <div className="resume">
        <section>
          <h2>{message}</h2>
          <p>Thanks for completing The Haystack.  Hope you enjoyed your adventure in Nashville.</p>
        </section>
      </div>
    )
  }
};

Completed.contextTypes = {
    router: React.PropTypes.func
};

export default Completed;
