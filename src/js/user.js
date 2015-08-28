class User {
  constructor() {
    loggedIn: false,
    username: null,
    firstName: null,
    lastName: null,

  }

  login () {
    this.loggedIn = true;
    return this;
  }

  logout() {
    this.loggedIn = false;
  }

  setData(data) {
    let user = data.attributes;
    this.email = user.username;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    return this;
  }

}

export default new User();
