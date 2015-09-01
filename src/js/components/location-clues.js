import React, {PropTypes} from 'react';

import Parse from '../parse';

class LocationClues extends React.Component {

  render() {

    return (
      <div className="location-clues">
        <section>
          <img ref="image" className="image" src="#"/>
          <h2>{this.props.title}</h2>
          <ul>
            {this.props.clues.map(clue => <li>{clue}</li>)}
          </ul>
        </section>
      </div>
    )
  }
};

LocationClues.contextTypes = {
    router: React.PropTypes.func
};

export default LocationClues;
