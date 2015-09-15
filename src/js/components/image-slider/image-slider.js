import React, {PropTypes} from 'react';
import Slider from 'react-slick';

class ImageSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div><img src="img/records.jpg"/></div>
        <div><img src="img/bootsguitar.jpg"/></div>
        <div><img src="img/musicvenue.jpg"/></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>
    );
  }
};

ImageSlider.contextTypes = {
    router: React.PropTypes.func
};

export default ImageSlider;
