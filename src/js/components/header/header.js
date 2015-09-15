import React from 'react';

import User from '../../user';
import LoginButton from './login-button';
import LogoutButton from './logout-button';

class Header extends React.Component {

  render() {
    var loginButton;
    if (User.loggedIn) {
      loginButton = <LogoutButton />;
    } else {
      loginButton = <LoginButton />;
    }

    return(
      <header className="navigation" role="banner">
        <nav>
          <h1 className="logo">
            THE HAYSTACK
          </h1>
          <h2 className="status">{loginButton}</h2>
        </nav>
      </header>
    )
  }
}

  Header.contextTypes = {
    router: React.PropTypes.func
  };


  export default Header;
