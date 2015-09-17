import React, {PropTypes} from 'react/addons';
let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
import objectAssign from 'object-assign';
import Parse from '../../parse';
import SweetAlert from 'sweetalert';

import Location from '../../location';
import LocationDetails from "./location-details";

class LocationArrive extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: '',
      image: '',
      description: '',
      unlockCode: '',
      unlockQuestion: '',
    }
  }

  static willTransitionTo (transition, context) {
   if (!Parse.User.current()) {
       transition.redirect('login');
    }
  }

  componentDidMount() {
    var user = Parse.User.current();
    let Locations = Parse.Object.extend('Locations');
    let query = new Parse.Query(Locations);
    query.equalTo('order', user.get('currentOrder'));

    query.find({
      success: (location) => {
        this.setState({
          clues: location[0].get('clues'),
          title: location[0].get('title'),
          image: location[0].get('image'),
          location: location[0].get('location'),
          unlockCode: location[0].get('unlockCode'),
          unlockQuestion: location[0].get('unlockQuestion'),
          description: location[0].get('description')
        });
      },
      error: (error) => {
        sweetAlert("Oops...", "Something went wrong finding your location!", "error");
      }
    });
  }

  render() {
    let {title, description, unlockCode, unlockQuestion, image} = this.state;

    let message = "Please login.";
    let user = Parse.User.current();

    if (user) {
      let message = '';
      return (
        <div className="location-arrive">
          <ReactCSSTransitionGroup transitionName="arrive" transitionAppear={true}>
            <section>
              <LocationDetails title={title} description={description} unlockCode={unlockCode} image={image} unlockQuestion={unlockQuestion}/>
            </section>
          </ReactCSSTransitionGroup>
        </div>
      )
    }
    return (
      <div></div>
    )
  }
};

LocationArrive.contextTypes = {
    router: React.PropTypes.func
};

export default LocationArrive;
