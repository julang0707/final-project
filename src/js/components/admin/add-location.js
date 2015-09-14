import React, {PropTypes} from 'react';

import Parse from '../../parse';
import Admin from './admin';
import Location from '../../location';

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

    var Locations = Parse.Object.extend("Locations");
    var location = new Locations();
    var [lat, lng] = data.location.split(',');
    var point = new Parse.GeoPoint({latitude: Number(lat), longitude: Number(lng)});
    location.set("title", data.title);
    location.set("description", data.description);
    location.set("unlockCode", data.unlockCode);
    location.set("location", point);
    location.set("order", Number(data.order));

    location.save(null, {
      success: (location) => {
        Location.setData(location);
        self.context.router.transitionTo('admin');
      },
      error: (location, error) => {
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });
  }

  render() {

    return (
      <div className="add-location">
        <section>
          <h2>Add a New Spot</h2>
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
