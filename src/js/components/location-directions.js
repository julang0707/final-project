import React, {PropTypes} from 'react';

import Parse from '../parse';

class LocationDirections extends React.Component {

  render() {

    return (
      <div className="location-clues">
        <section>
          <img ref="image" className="image" src="#"/>
          <h2>Clues</h2>
          <ul>
            <li>Clue 1</li>
            <li>Clue 2</li>
            <li>Clue 3</li>
          </ul>
        </section>
      </div>
    )
  }
};

LocationDirections.contextTypes = {
    router: React.PropTypes.func
};

export default LocationDirections;
