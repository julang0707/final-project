import React, {PropTypes} from 'react';

import Parse from '../../parse';

class LocationDirectionDetails extends React.Component {

  setStepHtml(step) {
    return {
      __html: step
    };
  }
  render() {

    return (
      <div className="direction-details">
        <ul>
          {this.props.steps.map((step) => <li dangerouslySetInnerHTML={this.setStepHtml(step)}></li>, this)}
        </ul>
      </div>
    )
  }
};


LocationDirectionDetails.contextTypes = {
    router: React.PropTypes.func
};

export default LocationDirectionDetails;
