import React, {PropTypes} from 'react';

import Parse from '../parse';
import ActiveHeader from './active-header';
import Location from '../location';
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
    let image = image;
    let {title, description, unlockCode, unlockQuestion} = this.state;
    return (
      <div className="location-arrive">
        <header>
          <ActiveHeader/>
        </header>
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
