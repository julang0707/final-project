import React, {PropTypes} from 'react';

import Parse from '../../parse';
import User from '../../user';
import AddLocation from './add-location';
import UsersList from './users-list';

class Admin extends React.Component {

  render() {
    return (
      <div className="admin">
        <AddLocation/>
        <UsersList/>
      </div>
    )
  }
};

Admin.contextTypes = {
    router: React.PropTypes.func
};

export default Admin;
