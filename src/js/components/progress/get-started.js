import React, {PropTypes} from 'react';
import Parse from '../../parse';

class GetStarted extends React.Component {

  onSubmit() {
    let user = Parse.User.current();
    let Location = Parse.Object.extend("Locations");
    let query = new Parse.Query(Location);

    query.equalTo("order", user.get('currentOrder'));
    query.find({
      success: (results) => {
        user.set('currentOrder', 1);
        user.save().then(() => {
          this.context.router.transitionTo('before');
        });
      },
      error: (error) => {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }

  render() {
    let message = "Please login.";
    let user = Parse.User.current();
    if (user) {
      message = `Let's Get Started, ${user.get('firstName')}.`;
      return (
        <div className="getstarted">
          <section>
            <h2>{message}</h2>
            <p>You're about to go on a fun adventure through Downtown Nashville. There are 10 stops on the adventure.  Here's what you need to know.</p>
            <ul>
              <li>Walking directions from one stop to the next are provided</li>
              <li>Enter an unlock code to reveal the next location</li>
              <li>Have fun and enjoy Nashville!</li>
            </ul>
            <button onClick={this.onSubmit.bind(this)} ref="started">Get Started</button>
          </section>
        </div>
      )
    }
    return (
      <div className="getstarted">
          {message}
      </div>
    )
  }
};

GetStarted.contextTypes = {
    router: React.PropTypes.func
};

export default GetStarted;
