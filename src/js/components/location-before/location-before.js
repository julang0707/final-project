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
      title: '',
      image: '',
      location: '',
    }
  }
  componentDidMount() {
    var user = Parse.User.current();
    var relation = user.relation("activeLocation");
    var self = this;
    relation.query().find({
      success: function(child) {
        let activeLocation = objectAssign({}, child[0].attributes, {
          id: child.id,
        });
        self.setState(activeLocation);
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }


  render() {
    let {title, clues, location} = this.state;

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
};

LocationBefore.contextTypes = {
    router: React.PropTypes.func
};

export default LocationBefore;
