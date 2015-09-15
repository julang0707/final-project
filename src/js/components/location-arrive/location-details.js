import React, {PropTypes} from 'react';

import Parse from '../../parse';
import User from '../../user';

class LocationDetails extends React.Component {

  onSubmit() {
    if(User.currentOrder === 10) {
      let unlockCode = React.findDOMNode(this.refs.unlockcode).value.toLowerCase();
      if (unlockCode === this.props.unlockCode) {
        var user = Parse.User.current();
        var relation = user.relation("activeLocation");
        var query = relation.query();
        query.equalTo("order", User.currentOrder)
        query.find({
          success: (results) => {
            relation.remove(results).then(() => {
              this.context.router.transitionTo('completed');
            });
          },
          error: (error) => {
            alert("Error: " + error.code + " " + error.message);
          }
        });
      }
    } else {
      let unlockCode = React.findDOMNode(this.refs.unlockcode).value.toLowerCase();
      if (unlockCode === this.props.unlockCode) {
        var user = Parse.User.current();
        var relation = user.relation("activeLocation");
        var query = relation.query();
        query.equalTo("order", User.currentOrder)
        query.find({
          success: (results) => {
            relation.remove(results);
          },
          error: (error) => {
            alert("Error: " + error.code + " " + error.message);
          }
        });

        User.currentOrder += 1;
        this.setState({
          currentOrder: User.currentOrder
        });

        var Location = Parse.Object.extend("Locations");
        var query = new Parse.Query(Location);
        query.equalTo("order", User.currentOrder);
        query.find({
          success: (results) => {
            var user = Parse.User.current();
            var relation = user.relation("activeLocation");
            relation.add(results);
            user.save().then(() => {
              this.context.router.transitionTo('before');
            });
          },
          error: (error) => {
            alert("Error: " + error.code + " " + error.message);
          }
        });
      } else {
        alert("Oops! Wrong code! Try again");
      }
    }
  }

  render() {
    return (
      <div className="location-details">
        <section>
          <img ref="image" className="image" src={this.props.image}/>
          <h2 ref="title" className="title">{this.props.title}</h2>
          <p ref="description" className="description">{this.props.description}</p>
          <h3 ref="question" className="question">{this.props.unlockQuestion}</h3>
          <input ref="unlockcode" className="unlock-code" type="text" placeholder="Enter your code"/>
          <button ref="unlock" className="button" onClick={this.onSubmit.bind(this)}>Unlock</button>
        </section>
      </div>
    )
  }
};

LocationDetails.contextTypes = {
  router: React.PropTypes.func
};

export default LocationDetails;
