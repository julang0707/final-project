import React, {PropTypes} from 'react';
import objectAssign from 'object-assign';
import Parse from '../../parse';

import Location from '../../location';
import LocationDetails from "./location-arrive/location-details";

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
    var Location = Parse.Object.extend("Locations");
    var query = new Parse.Query(Location);
    var self = this;
    query.get("nMTsgkyWXx", {
      success: function(results) {
        let image = results.attributes.image._url
        let location = objectAssign({}, results.attributes, {
          id: results.id,
          image: image
        });
        self.setState(location);
      },
      error: function(object, error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }

  render() {
    let {title, description, unlockCode, unlockQuestion, image} = this.state;
    return (
      <div className="location-arrive">
        <section>
          <LocationDetails title={title} description={description} unlockCode={unlockCode} image={image} unlockQuestion={unlockQuestion}/>
        </section>
      </div>
    )
  }
};

LocationArrive.contextTypes = {
    router: React.PropTypes.func
};

export default LocationArrive;
