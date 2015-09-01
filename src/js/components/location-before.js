import React, {PropTypes} from 'react';

import Parse from '../parse';
import ActiveHeader from './active-header';
import Location from '../location';

class LocationBefore extends React.Component {

  componentDidMount() {
    var Locations = Parse.Object.extend("Locations");
    var query = new Parse.Query(Locations);
    query.get("nMTsgkyWXx", {
      success: function(Locations) {
        this.setState({
          data: results
        });
      },
      error: function(Locations, error) {
        this.setState({
          data: []
        });

      }
    });
  }

  render() {

    return (
      <div className="location-before">
        <header>
          <ActiveHeader/>
        </header>
        <section>
          <h2>{data.title}</h2>
          <input type="text" ref="firstName" className="first-name" placeholder="First Name"/>
          <input type="text" ref="lastName" className="last-name" placeholder="Last Name"/>
          <input type="email" ref="email" className="email" placeholder="Email"/>
          <input type="password" ref="password" className="password" placeholder="Password"/>
        </section>
      </div>
    )
  }
};

LocationBefore.contextTypes = {
    router: React.PropTypes.func
};

export default LocationBefore;
