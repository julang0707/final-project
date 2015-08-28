class User {
  constructor() {
    this.loggedIn = false;
    this.email = null;
    this.firstName = null;
    this.lastName = null;

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
