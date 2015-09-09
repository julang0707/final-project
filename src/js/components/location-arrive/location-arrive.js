import React, {PropTypes} from 'react';
import objectAssign from 'object-assign';
import Parse from '../../parse';

import User from '../../user';
import Location from '../../location';
import LocationDetails from "./location-details";

class LocationArrive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      description: '',
      unlockCode: '',
      unlockQuestion: '',
    }
  }
  componentDidMount() {
    var user = Parse.User.current();
    var relation = user.relation("activeLocation");
    var self = this;
    var query = relation.query();
    query.equalTo("order", User.currentOrder);
    query.find({
      success: function(child) {
        let image = child[0].attributes.image._url
        let activeLocation = objectAssign({}, child[0].attributes, {
          id: child.id,
          image: image
        });
        self.setState(activeLocation);
      },
      error: function(object, error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }

  render() {
    let {title, description, unlockCode, unlockQuestion, image} = this.state;

    let message = "Please login.";

    if (User.loggedIn) {
      let message = '';
      return (
        <div className="location-arrive">
          <section>
            <LocationDetails title={title} description={description} unlockCode={unlockCode} image={image} unlockQuestion={unlockQuestion}/>
          </section>
        </div>
      )
    }
    return (
      <div className="location-arrive">
        {message}
      </div>
    )
  }
};

LocationArrive.contextTypes = {
    router: React.PropTypes.func
};

export default LocationArrive;
