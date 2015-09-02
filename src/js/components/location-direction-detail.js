

import React, {PropTypes} from 'react';

import Parse from '../parse';

class LocationDirectionDetails extends React.Component {

  render() {

    return (
      <div className="direction-details">
        <section>
          <h2>Directions</h2>
        </section>
      </div>
    )
  }
};

LocationDirectionDetails.contextTypes = {
    router: React.PropTypes.func
};

export default LocationDirectionDetails;
