import React, {PropTypes} from 'react';

class User {
  constructor() {
    this.loggedIn = false;
    this.email = null;
    this.firstName = null;
    this.lastName = null;
    this.admin = false;

  }

  login () {
    this.loggedIn = true;
    return this;
  }

  logout() {
    this.loggedIn = false;
    return this;
  }

  setData(data) {
    let user = data.attributes;
    this.email = user.username;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.admin = user.admin;
    return this;
  }

}

User.contextTypes = {
    router: React.PropTypes.func
};

export default new User();
