import React from 'react';
import Parse from '../parse';

class LogoutButton extends React.Component {
  onLogout() {
    Parse.User.logOut();
    this.context.router.transitionTo('login');
  }

  render() {
    return(
      <a onClick={this.onLogout.bind(this)} href="#">Logout</a>
    )
  }
}

LogoutButton.contextTypes = {
    router: React.PropTypes.func
};

export default LogoutButton;
