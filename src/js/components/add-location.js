import React, {PropTypes} from 'react';

import Parse from '../parse';
import User from '../user';
import ActiveHeader from './active-header';
import Admin from './admin';


class AddLocation extends React.Component {

  onSubmit() {
    let self = this;
    let data = {
      title: React.findDOMNode(this.refs.title).value,
      description: React.findDOMNode(this.refs.description).value,
      unlockCode: React.findDOMNode(this.refs.unlockCode).value,
      location: React.findDOMNode(this.refs.location).value,
      order: React.findDOMNode(this.refs.order).value
    }

    if (!(data.title && data.description && data.unlockCode && data.location && data.order)) {
      alert('Please complete the location form.')
      return;
    }

    var GameScore = Parse.Object.extend("GameScore");
    let locations = new Parse.Locations();
    locations.set("title", data.title);
    locations.set("description", data.description);
    locations.set("unlockCode", data.unlockCode);
    locations.set("location", data.location);
    locations.set("order", data.order);

    locations.save(null, {
      success: function(locations) {
        self.context.router.transitionTo('admin');
      },
      error: function(locations, error) {
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });
  }

  render() {

    return (
      <div className="add-location">
        <header>
          <ActiveHeader/>
        </header>
        <section>
          <h2>Add a New Location</h2>
          <input type="text" ref="title" className="title" placeholder="Enter a Title"/>
          <input type="textarea" ref="description" className="description" placeholder="Enter a Description"/>
          <input type="text" ref="unlockCode" className="unlockCode" placeholder="Enter an Unlock Code"/>
          <input type="text" ref="location" className="location" placeholder="Enter a Location"/>
          <input type="text" ref="order" className="order" placeholder="Enter an Order"/>
          <button ref="register" onClick={this.onSubmit.bind(this)}>Add</button>
        </section>
      </div>
    )
  }
}

AddLocation.contextTypes = {
  router: React.PropTypes.func
};


export default AddLocation;
