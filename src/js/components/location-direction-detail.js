import React, {PropTypes} from 'react';

import Parse from '../parse';

class LocationDirectionDetails extends React.Component {

  render() {

    return (
      <div className="direction-details">
        <ul>
          {this.props.steps.reduce(step => <li>{step.instructions}</li>)}
        </ul>
      </div>
    )
  }
};


LocationDirectionDetails.contextTypes = {
    router: React.PropTypes.func
};

export default LocationDirectionDetails;
