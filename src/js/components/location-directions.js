import React, {PropTypes} from 'react';

import Parse from '../parse';
import LocationDirectionDetails from './location-direction-detail';

class LocationDirections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clues: [],
      title: '',
      image: ''
    }
  }

  componentDidMount() {
    var Location = Parse.Object.extend("Locations");
    var query = new Parse.Query(Location);
    var self = this;
    query.get("nMTsgkyWXx", {
      success: function(results) {
        let location = objectAssign({}, results.attributes, {
          id: results.id
        });
        self.setState(location);
      },
      error: function(object, error) {
        // The object was not retrieved successfully.
        // error is a Parse.Error with an error code and message.
      }
    });
  }
  render() {

    return (
      <div className="location-clues">
        <section>
          <LocationDirectionDetails/>
        </section>
      </div>
    )
  }
};

LocationDirections.contextTypes = {
    router: React.PropTypes.func
};

export default LocationDirections;
