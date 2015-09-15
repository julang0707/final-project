import React, {PropTypes} from 'react';

import Parse from '../../parse';

class LocationDirectionDetails extends React.Component {

  onSubmit() {
    this.context.router.transitionTo('arrive');
  }

  setStepHtml(step) {
    return {
      __html: step
    };
  }
  render() {

    return (
      <div className="direction-details">
        <ul>
          {this.props.steps.map((step, i) => <li key={i} dangerouslySetInnerHTML={this.setStepHtml(step)}></li>, this)}
        </ul>
        <button onClick={this.onSubmit.bind(this)} ref="started">I've Arrived</button>
      </div>
    )
  }
};


LocationDirectionDetails.contextTypes = {
    router: React.PropTypes.func
};

export default LocationDirectionDetails;
