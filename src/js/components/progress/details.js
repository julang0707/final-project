import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Parse from '../../parse';
import ImageSlider from '../image-slider/image-slider';

class Details extends React.Component {
  render() {
    let registerBtn;
    let user = Parse.User.current();
    if (!user) {
      registerBtn = <Link to="register">Register Now</Link>
    } else if(user && user.get('currentOrder') > 0){
      registerBtn = <Link to="launch">Continue</Link>
    } else {
      registerBtn = <Link to="launch">Get Started</Link>
    }
    return (
      <main className="details">
        <ImageSlider/>
        <section className="intro">
          <h2><span>Welcome to THE HAYSTACK!</span></h2>
          <p>Downtown Nashville is packed with interesting sites and unique experiences.<br/>THE HAYSTACK will lead you through a 10 stop mystery tour of downtown Nashville.<br/>Trust us you'll enjoy your walk through Music City!</p>
          {registerBtn}
        </section>
      </main>

    )
  }
};

Details.contextTypes = {
    router: React.PropTypes.func
};

export default Details;
