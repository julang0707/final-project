import React, {PropTypes} from 'react';

class ImageSlider extends React.Component {
  render() {
    return (
      <div id="slider">
        <figure>
        <img src="img/records-large.jpg" alt=""/>
        <img src="img/musicvenue-large.jpg" alt=""/>
        <img src="img/river-large.jpg" alt=""/>
        <img src="img/boots-large.jpg" alt=""/>
        <img src="img/bootsguitar-large.jpg" alt=""/>
        </figure>
      </div>
    );
  }
};

ImageSlider.contextTypes = {
  router: React.PropTypes.func
};

export default ImageSlider;
