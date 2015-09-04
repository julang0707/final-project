import React from 'react';
import $ from 'jquery';

var FontAwesome = require('react-fontawesome');
import User from '../user';
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
        <div className="navigation-wrapper">
          <a href="#" className="logo">
            <FontAwesome
              classNameName='header-icon'
              name='map-signs'
              size='lg'
            />
          </a>
          <a href="#" className="navigation-menu-button" id="js-mobile-menu">Menu</a>
          <nav role="navigation">
            <ul id="js-navigation-menu" className="navigation-menu show">
              <li className="nav-link"><a href="#">The Details</a></li>
              <li className="nav-link">{loginButton}</li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

Header.contextTypes = {
    router: React.PropTypes.func
};

$(document).ready(function() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });
});

export default Header;
