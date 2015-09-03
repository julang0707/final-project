import React, {PropTypes, Component} from 'react';
import objectAssign from 'object-assign';

import Parse from '../parse';
import LocationDirectionDetails from './location-direction-detail';

class LocationDirections extends React.Component {

  componentDidMount() {
    var directionsService = new google.maps.DirectionsService;
      var start = '4301 Saunders Ave, Nashville, TN';
      var end = '613 Ewing Ave Nasville, TN';
      var self = this;
      directionsService.route({
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.WALKING
      }, (response, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          console.log(response);
          var steps =  response.routes[0].legs[0].steps
          this.setState({
            steps: result
          })
        }
        else {
          window.alert('Directions request failed due to ' + status);
        }
      });


  }

  render () {
    let {steps} = this.state;
    return (
      <div className="directions">
      <header>
        <ActiveHeader/>
      </header>
      <section>
        <LocationDirectionDetails steps={steps}/>
      </section>
      </div>
    );
  }
};

LocationDirections.contextTypes = {
    router: React.PropTypes.func
};

export default LocationDirections;
