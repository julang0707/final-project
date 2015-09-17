import React, {PropTypes} from 'react';
import Parse from '../../parse';
import objectAssign from 'object-assign';

import GetStarted from './get-started';
import Resume from './resume';

class Launch extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentOrder: 0,
    }
  }

  static willTransitionTo (transition, context) {
   if (!Parse.User.current()) {
       transition.redirect('login');
    }
  }

  componentDidMount() {
    var user = Parse.User.current();


    if (user) {
      this.setState({
        currentOrder: user.get('currentOrder')
      });
    }
  }

  render() {
    let {currentOrder} = this.state;
    let message = "Please login.";
    let user = Parse.User.current();

    if (user && !currentOrder) {
      return (
        <div className="getstarted">
          <GetStarted/>
        </div>
      )
    }
    if (user && currentOrder > 0) {
      return (
        <div className="resume">
          <Resume order={currentOrder}/>
        </div>
      )
    }

    return (
      <div></div>
    )
  }
};

Launch.contextTypes = {
    router: React.PropTypes.func
};

export default Launch;
