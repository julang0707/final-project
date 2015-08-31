import React, {PropTypes} from 'react';
import $ from 'jquery';



class ImageSlider extends React.Component {
  $(function(){
    $("#slides").slidesjs({
      width: 940,
      height: 528
    });
  });

  render() {
    return (
      <div id="slides">
        <img src="http://placehold.it/940x528">
        <img src="http://placehold.it/940x528">
        <img src="http://placehold.it/940x528">
        <img src="http://placehold.it/940x528">
        <img src="http://placehold.it/940x528">
      </div>
    )
  }
};

export default ImageSlider;
