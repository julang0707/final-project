import React, {PropTypes} from 'react';
import objectAssign from 'object-assign';
import Parse from '../../parse';

import User from '../../user';
import Location from '../../location';
import LocationClues from './location-clues';
import LocationDirections from './location-directions';

class LocationBefore extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clues: [],
      title: '',
      image: '',
      location: '',
    }
  }

  componentDidMount() {
    var user = Parse.User.current();
    var relation = user.relation("activeLocation");
    var self = this;
    var query = relation.query();
    query.equalTo("order", User.currentOrder);
    query.find({
      success: (child) => {
        let activeLocation = objectAssign({}, child[0].attributes, {
          id: child.id,
        });
        self.setState(activeLocation);
      },
      error: (error) => {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }


  render() {
    let {title, clues, location} = this.state;
    let message = "Please login.";

    if (User.loggedIn) {
      let message = '';
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
      this.context.router.transitionTo('login')
    )
  }
};

LocationBefore.contextTypes = {
    router: React.PropTypes.func
};

export default LocationBefore;
