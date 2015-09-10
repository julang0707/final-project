import React, {PropTypes} from 'react';
import Parse from '../../parse';

var FontAwesome = require('react-fontawesome');

import User from '../../user';

class Resume extends React.Component {

  constructor(props) {
    super(props);
    let user = User.currentOrder;
    this.state = {
      user: this.props.order
    }
  }

  onSubmit() {
    console.log(this.props.order);
    console.log(User.currentOrder);
    this.context.router.transitionTo('before');
  }

  render() {
    let message = "Please login.";

    if (User.loggedIn) {
      message = `${User.firstName}, resume your hunt.`;
    }

    return (
      <div className="resume">
        <section>
          <h2>{message}</h2>
          <p>Looks like you already started The Haystack. Resume your adventure.</p>
          <button onClick={this.onSubmit.bind(this)} ref="resume">Resume Your Hunt</button>
        </section>
      </div>
    )
  }
};

Resume.contextTypes = {
    router: React.PropTypes.func
};

export default Resume;
