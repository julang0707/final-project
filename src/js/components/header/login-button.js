import React from 'react';
import {Link} from 'react-router';

class LoginButton extends React.Component {
  render() {
    return(
      <Link to="login">Login</Link>
    )
  }
}

export default LoginButton;
