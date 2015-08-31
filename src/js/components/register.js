import React, {PropTypes} from 'react';

import Parse from '../parse';

class Register extends React.Component {

  onSubmit() {
    let self = this;
    let data = {
      username: React.findDOMNode(this.refs.email).value,
      firstName: React.findDOMNode(this.refs.firstName).value,
      lastName: React.findDOMNode(this.refs.lastName).value,
      password: React.findDOMNode(this.refs.password).value
    }

    if (!(data.username && data.password && data.firstName && data.lastName)) {
      alert('Please complete the registration form.')
      return;
    }

    Parse.User.logOut();

    var user = new Parse.User();
    user.set("username", data.username);
    user.set("password", data.password);
    user.set("firstName", data.firstName);
    user.set("lastName", data.lastName);

    user.signUp(null, {
      success: function(user) {
        User.setData(user).login();
        self.context.router.transitionTo('getstarted');
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }

  render() {

    return (
      <div className="register">
        <header>
          <MainHeader/>
        </header>
        <section>
          <h2>Register</h2>
          <input type="text" ref="firstName" className="first-name" placeholder="First Name"/>
          <input type="text" ref="lastName" className="last-name" placeholder="Last Name"/>
          <input type="email" ref="email" className="email" placeholder="Email"/>
          <input type="password" ref="password" className="password" placeholder="Password"/>
          <button ref="register" onClick={this.onSubmit.bind(this)}>Register</button>
        </section>
      </div>
    )
  }
};

Register.contextTypes = {
    router: React.PropTypes.func
};

export default Register;
