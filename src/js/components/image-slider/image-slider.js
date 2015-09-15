import React, {PropTypes} from 'react';

class ImageSlider extends React.Component {
  render() {
    return (
      <div className="gallery autoplay items-3">
      <div id="item-1" className="control-operator"></div>
      <div id="item-2" className="control-operator"></div>
      <div id="item-3" className="control-operator"></div>

      <figure className="item">
        <img src="img/bootsguitar-wide.jpg" />
      </figure>

      <figure className="item">
        <img src="img/musicvenue-wide.jpg" />
      </figure>

      <figure className="item">
        <img src="img/records-wide.jpg" />
      </figure>


    </div>
    );
  }
};

ImageSlider.contextTypes = {
    router: React.PropTypes.func
};

export default ImageSlider;
