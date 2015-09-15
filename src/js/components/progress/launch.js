import React, {PropTypes} from 'react';
import Parse from '../../parse';
import objectAssign from 'object-assign';

import GetStarted from './get-started';
import Resume from './resume';

class Launch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOrder: 0,
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
    // this.context.router.transitionTo('login')
    return (<div>Please login.</div>)
  }
};

Launch.contextTypes = {
    router: React.PropTypes.func
};

export default Launch;
