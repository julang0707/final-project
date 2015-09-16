import React, {PropTypes, Component} from 'react';
import objectAssign from 'object-assign';

import Parse from '../../parse';
import LocationDirectionDetails from './location-direction-detail';


class LocationDirections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [],
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      let {latitude, longitude} = this.props.location;
      let start = `${position.coords.latitude}, ${position.coords.longitude}`;
      let end = `${latitude}, ${longitude}`;
      let directionsService = new google.maps.DirectionsService;

      directionsService.route({
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.WALKING
      }, (response, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          let instructions = response.routes[0].legs[0].steps;
          let steps = instructions.map(step => {
            return step.instructions;
          });

          this.setState({
            steps: steps
          });
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });

    });

  }

  render () {
    let {steps} = this.state;

    if (!steps.length) {
      return (
        <div className="steps">
          <img src="img/ajax-loader-bar.gif"/>
        </div>
      )
    }

    return (
      <LocationDirectionDetails steps={steps}/>
    )
  }
};

LocationDirections.contextTypes = {
  router: React.PropTypes.func
};

export default LocationDirections;
