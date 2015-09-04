import React, {PropTypes} from 'react';
import objectAssign from 'object-assign';
import Parse from '../parse';

import Location from '../location';
import LocationClues from './location-clues';
import LocationDirections from './location-directions';

class LocationBefore extends React.Component {
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
          id: results.id,
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
    let {title, clues} = this.state;
    return (
      <div className="location-before">
        <section>
          <LocationClues title={title} clues={clues}/>
        </section>
        <section>
          <LocationDirections/>
        </section>
      </div>
    )
  }
};

LocationBefore.contextTypes = {
    router: React.PropTypes.func
};

export default LocationBefore;
