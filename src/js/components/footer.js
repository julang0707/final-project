import React from 'react';

var FontAwesome = require('react-fontawesome');

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer" role="contentinfo">
        <div className="footer-logo">
          <FontAwesome
            className='footer-icon'
            name='map-signs'
            size='lg'
          />
        </div>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
      </footer>
    )
  }
}

export default Footer;
