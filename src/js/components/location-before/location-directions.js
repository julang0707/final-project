import React, {PropTypes, Component} from 'react';
import objectAssign from 'object-assign';

import Parse from '../../parse';
import LocationDirectionDetails from './location-direction-detail';


class LocationDirections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: []
    };
  }
  componentDidMount() {
    var directionsService = new google.maps.DirectionsService;
    var self = this;
    var start = '4301 Saunders Ave, Nashville, TN';
    var end = '613 Ewing Ave Nashville, TN';
    directionsService.route({
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.WALKING
    }, function(response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        let instructions = response.routes[0].legs[0].steps;
        let steps = instructions.map(step => {
          return step.instructions;
        });

        self.setState({
          steps: steps
        });
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  render () {
    let {steps} = this.state;
    return (
      <LocationDirectionDetails steps={steps}/>
    )
  }
};

LocationDirections.contextTypes = {
  router: React.PropTypes.func
};

export default LocationDirections;
