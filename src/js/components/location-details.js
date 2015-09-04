import React, {PropTypes} from 'react';

import Parse from '../parse';

class LocationDetails extends React.Component {

  onSubmit() {
    let unlockCode = React.findDOMNode(this.refs.unlockcode).value;
    if (unlockCode === this.props.unlockCode) {
      this.context.router.transitionTo('before');
    }
  }

  render() {

    return (
      <div className="location-details">
        <section>
          <img ref="image" className="image" src={this.props.image}/>
          <h2 ref="title" className="title">{this.props.title}</h2>
          <p ref="description" className="description">{this.props.description}</p>
          <h3 ref="question" className="question">{this.props.unlockQuestion}</h3>
          <input ref="unlockcode" className="unlock-code" type="text" placeholder="Enter your code"/>
          <button ref="unlock" className="button" onClick={this.onSubmit.bind(this)}>Unlock</button>
        </section>
      </div>
    )
  }
};

LocationDetails.contextTypes = {
    router: React.PropTypes.func
};

export default LocationDetails;
