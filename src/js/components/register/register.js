import React, {PropTypes} from 'react';
import Parse from '../../parse';
import SweetAlert from 'sweetalert';

class Register extends React.Component {

  onSubmit() {
    let self = this;
    let data = {
      username: React.findDOMNode(this.refs.email).value,
      firstName: React.findDOMNode(this.refs.firstName).value,
      lastName: React.findDOMNode(this.refs.lastName).value,
      password: React.findDOMNode(this.refs.password).value
    }

    Parse.User.logOut();

    var user = new Parse.User();
    user.set("username", data.username);
    user.set("password", data.password);
    user.set("firstName", data.firstName);
    user.set("lastName", data.lastName);
    user.set("currentOrder", 0);

    user.signUp(null, {
      success: (user) => {
        self.context.router.transitionTo('launch');
      },
      error: (user, error) => {
        swal({
          title: "Oops!",
          text: "Please complete the registration form.",
          type: "error",
          confirmButtonText: "Continue"
        });
      }
    });
  }

  render() {

    return (
      <div className="register">
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
