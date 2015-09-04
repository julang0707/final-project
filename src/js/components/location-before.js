import React, {PropTypes} from 'react';
import objectAssign from 'object-assign';
import Parse from '../parse';
import ActiveHeader from './active-header';
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
        console.log(results);
        let image = results.attributes.image._url
        let location = objectAssign({}, results.attributes, {
          id: results.id,
        });
        console.log(image);
        self.setState(location);
        self.setState({
          image: image
        });
      },
      error: function(object, error) {
        // The object was not retrieved successfully.
        // error is a Parse.Error with an error code and message.
      }
    });
  }

  render() {
    let {title, clues, image} = this.state;
    return (
      <div className="location-before">
        <header>
          <ActiveHeader/>
        </header>
        <section>
          <LocationClues title={title} clues={clues} image={image}/>
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
