import React from 'react';
import Link from 'react-router';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
            <h3><a href="/details">The Details</a></h3>
            <p>&copy; 2015 THE HAYSTACK</p>
      </footer>
    )
  }
}

export default Footer;
