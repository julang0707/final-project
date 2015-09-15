import React, {PropTypes} from 'react';
import Parse from '../../parse';

import User from '../../user';
import Login from '../login/login';
import ImageSlider from '../image-slider/image-slider';

class Details extends React.Component {
  onSubmit() {
    this.context.router.transitionTo('register');
  }
  render() {
    return (
      <main className="details">
        <ImageSlider/>
        <section className="intro">
          <h2>Welcome to THE HAYSTACK!</h2>
          <p>Downtown Nashville is packed with interesting sites and unique experiences.  THE HAYSTACK will lead you through a 10 stop mystery tour of downtown Nashville.  Trust us you'll enjoy your walk through Music City!</p>
          <button onClick={this.onSubmit.bind(this)} ref="register">Register Now</button>
        </section>
      </main>

    )
  }
};

Details.contextTypes = {
    router: React.PropTypes.func
};

export default Details;
