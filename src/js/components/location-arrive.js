import React, {PropTypes} from 'react';

import Parse from '../parse';
import ActiveHeader from './active-header';
import Location from '../location';

class LocationArrive extends React.Component {

  // componentDidMount() {
  //   var Locations = Parse.Object.extend("Locations");
  //   var query = new Parse.Query(Locations);
  //   query.get("nMTsgkyWXx", {
  //     success: function(Locations) {
  //       this.setState({
  //         data: results
  //       });
  //     },
  //     error: function(Locations, error) {
  //       this.setState({
  //         data: []
  //       });
  //
  //     }
  //   });
  // }

  render() {

    return (
      <div className="location-arrive">
        <header>
          <ActiveHeader/>
        </header>
        <section>
          <LocationDetails/>
        </section>
      </div>
    )
  }
};

LocationArrive.contextTypes = {
    router: React.PropTypes.func
};

export default LocationArrive;
