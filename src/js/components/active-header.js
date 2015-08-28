import React from 'react';
import $ from 'jquery';

import Parse from '../parse';
import User from '../user';

var FontAwesome = require('react-fontawesome');

class ActiveHeader extends React.Component {

  render() {
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
              <li className="nav-link"><a href="#">Logout</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

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

export default ActiveHeader;
