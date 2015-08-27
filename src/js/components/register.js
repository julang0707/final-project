import React from 'react';
import Parse from 'parse';
import Router from 'react-router';

import App from './app';

class Register extends React.Component {
  onSubmit() {
    user.signUp(null, {
      success: function(user) {
        // Hooray! Let them use the app now.
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }

  render() {
    return (
      <section>
        <h2>Register</h2>
        <input type="text" ref="first-name" className="first-name" placeholder="First Name"/>
        <input type="text" ref="last-name" className="last-name" placeholder="Last Name"/>
        <input type="email" ref="username" className="email" placeholder="Email"/>
        <input type="password" ref="password" className="password" placeholder="Password"/>
        <button ref="register" onClick={this.onSubmit.bind(this)}>Register</button>
      </section>
    )
  }
}
