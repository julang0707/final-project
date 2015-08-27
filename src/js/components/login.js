import React from 'react';
import Parse from 'parse'
import Router from 'react-router';

import App from './app';

class Login extends React.Component {
  onSubmit() {
    Parse.User.logIn("myname", "mypass", {
      success: function(user) {
        // Do stuff after successful login.
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
      }
    });
  }

  render() {
    return (
      <section>
        <h2>Login</h2>
        <input type="email" ref="username" className="email" placeholder="Email"/>
        <input type="password" ref="password" className="password" placeholder="Password"/>
        <button ref="register" onClick={this.onSubmit.bind(this)}>Login</button>
      </section>
    )
  }
}
