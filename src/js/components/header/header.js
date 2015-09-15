import React from 'react';
import {Link} from 'react-router';
import Parse from '../../parse';
import LoginButton from './login-button';
import LogoutButton from './logout-button';

class Header extends React.Component {

  render() {
    var loginButton;
    if (Parse.User.current()) {
      loginButton = <LogoutButton />;
    } else {
      loginButton = <LoginButton />;
    }

    return(
      <header className="navigation" role="banner">
        <nav>
          <h1 className="logo">
            <Link to="details">THE HAYSTACK</Link>
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
