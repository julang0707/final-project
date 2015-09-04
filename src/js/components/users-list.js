import React, {PropTypes} from 'react';

import Parse from '../parse';
import User from '../user';

class UsersList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        data: []
    };
  }

  componentDidMount() {
    var users = Parse.Object.extend("User");
    var query = new Parse.Query(User);
    query.find({
      success: function(results) {
        this.setState({
          data: results
        });
      },

      error: function(error) {
        this.setState({
          data: []
        });
      }
    });
  }

  onUpdate() {
    var User = Parse.Object.extend("User");
    var user = new User();
    let admin = user.get("admin");

    user.set("admin", data.admin);

    user.save(null, {
      success: function(user) {
        user.set("admin", true);
      }
    });
  }

  render() {

    return (
      <div className="users-list">
          <h2>Users List</h2>
          let users = [];
            <li>{users.map((user) => {
                return <User {...user} key={user._id}/>
              })}</li>
          <input type="checkbox" ref="admin" onChange={this.onUpdate.bind(this)}/>
      </div>
    )
  }
};

UsersList.contextTypes = {
    router: React.PropTypes.func
};


export default UsersList;
