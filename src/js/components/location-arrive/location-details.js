import React, {PropTypes} from 'react';
import Parse from '../../parse';

class LocationDetails extends React.Component {

  onSubmit() {
      let unlockCode = React.findDOMNode(this.refs.unlockcode).value.toLowerCase();
      if (unlockCode !== this.props.unlockCode) {
        alert('Try again.');
        return;
      }

      let user = Parse.User.current();

      user.increment('currentOrder');
      user.save().then(user => {
        this.context.router.transitionTo('before');
      });
  }

  render() {
    let {image, title, description, unlockQuestion} = this.props;

    if (image) {
      image = image.url();
    }

    return (
      <div className="location-details">
        <section>
          <img ref="image" className="image" src={image}/>
          <h2 ref="title" className="title">{title}</h2>
          <p ref="description" className="description">{description}</p>
          <h3 ref="question" className="question">{unlockQuestion}</h3>
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

LocationDetails.defaultProps = {
  image: null,
  description: null,
  unlockQuestion: null
}

export default LocationDetails;
