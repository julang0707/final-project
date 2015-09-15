import React, {PropTypes} from 'react';
import objectAssign from 'object-assign';
import Parse from '../../parse';

import Location from '../../location';
import LocationClues from './location-clues';
import LocationDirections from './location-directions';

class LocationBefore extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clues: [],
      title: null,
      image: null,
      location: null
    }
  }

  componentDidMount() {
    var user = Parse.User.current();
    let Locations = Parse.Object.extend('Locations');
    let query = new Parse.Query(Locations);
    query.equalTo('order', user.get('currentOrder'));

    query.find({
      success: (location) => {
        if (location.length) {
          this.setState({
            clues: location[0].get('clues'),
            title: location[0].get('title'),
            image: location[0].get('image'),
            location: location[0].get('location')
          });
        } else {
          this.context.router.transitionTo('completed');
        }

      },
      error: (error) => {
        console.log('Error fetching location', error);
      }
    });
  }


  render() {
    let {title, clues, location} = this.state;

    if (Parse.User.current()) {
      return (
        <div className="location-before">
          <section>
            <LocationClues title={title} clues={clues}/>
          </section>
          <section>
            <LocationDirections location={location} />
          </section>
        </div>
      )
    }

    return (
      // this.context.router.transitionTo('login')
      <div>Please login</div>
    )
  }
};

LocationBefore.contextTypes = {
    router: React.PropTypes.func
};

export default LocationBefore;
