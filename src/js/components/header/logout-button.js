import React from 'react';
import Parse from '../../parse';

class LogoutButton extends React.Component {
  onSubmit() {
    let self = this;
    Parse.User.logOut();
    self.context.router.transitionTo('login');
  }

  render() {
    return(
      <a onClick={this.onSubmit.bind(this)} href="#">Logout</a>
    )
  }
}

LogoutButton.contextTypes = {
    router: React.PropTypes.func
};


export default LogoutButton;
