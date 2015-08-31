import React, {PropTypes} from 'react';

import Parse from '../parse';
import User from '../user';
import MainHeader from './main-header';

class UsersList extends React.Component {

  onUpdate() {
    var Locations = Parse.Object.extend("Locations");
    var locations = new Locations();
    let email = user.get("email");
    let firstName = user.get("firstName");
    let lastName = user.get("lastName");
    let admin = user.get("admin");

    locations.set("admin", data.admin);

    locations.save(null, {
      success: function(locations) {
        locations.set("admin", true);
      }
    });
  }

  render() {
    return (
      <div className="users-list">
        <section>
          <h2>Users List</h2>
          <p>{this.refs.email}</p>
          <p>{this.refs.firstName}</p>
          <p>{this.refs.lastName}</p>
          <input type="checkbox" ref="admin" onClick={this.onUpdate.bind(this)}/>
        </section>
      </div>
    )
  }
};

UsersList.contextTypes = {
    router: React.PropTypes.func
};


export default UsersList;
