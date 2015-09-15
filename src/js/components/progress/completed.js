import React, {PropTypes} from 'react';
import Parse from '../../parse';


class Completed extends React.Component {
  componentDidMount() {
    let user = Parse.User.current();
    user.set('currentOrder', 0);
    user.save();
  }

  render() {
    let message = "Please login.";
    let user = Parse.User.current();


    if (user) {
      message = `${user.get('firstName')}, you completed The Haystack`;
    }

    return (
      <div className="resume">
        <section>
          <h2>{message}</h2>
          <p>Thanks for completing The Haystack.  Hope you enjoyed your adventure in Nashville.</p>
        </section>
      </div>
    )
  }
};

Completed.contextTypes = {
    router: React.PropTypes.func
};

export default Completed;
