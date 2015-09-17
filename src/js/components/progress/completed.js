import React, {PropTypes} from 'react/addons';
let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
import Parse from '../../parse';


class Completed extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  static willTransitionTo (transition, context) {
   if (!Parse.User.current()) {
       transition.redirect('login');
    }
  }

  componentDidMount() {
    let user = Parse.User.current();
    user.set('currentOrder', 0);
    user.save();
  }

  render() {
    let message = "Please login.";
    let user = Parse.User.current();


    if (user) {
      message = `${user.get('firstName')}, you completed The Haystack`;
    }

    return (
      <div className="resume">
        <ReactCSSTransitionGroup transitionName="arrive" transitionAppear={true}>
          <section>
            <img src="img/parthenon.jpg"/>
            <h2>{message}</h2>
            <p>Thanks for completing The Haystack.  Hope you enjoyed your adventure in Nashville.</p>
          </section>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
};

Completed.contextTypes = {
    router: React.PropTypes.func
};

export default Completed;
