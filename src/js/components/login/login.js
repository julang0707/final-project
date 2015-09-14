import React from 'react';

import Parse from '../../parse';
import User from '../../user';

class Login extends React.Component {

  onSubmit(){
    let self = this;
    let data = {
      username: React.findDOMNode(this.refs.username).value,
      password: React.findDOMNode(this.refs.password).value
    }

    if (data.username && data.password && data.password === User.password) {
      alert('Oops! Your email or password is wrong. Try again!')
      return;
    }
    Parse.User.logIn(data.username, data.password, {
      success: (user) => {
        User.setData(user).login();
        self.context.router.transitionTo('launch');
      },
      error: (user, error) => {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }


  render() {
    return (
      <div className="login">
        <section>
          <h2>Login</h2>
          <input type="email" ref="username" className="email" placeholder="Email"/>
          <input type="password" ref="password" className="password" placeholder="Password"/>
          <button ref="login" onClick={this.onSubmit.bind(this)}>Login</button>
        </section>
      </div>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.func
};

export default Login;
