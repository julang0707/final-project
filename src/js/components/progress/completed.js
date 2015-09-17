import React, {PropTypes} from 'react/addons';
import {Link} from 'react-router';
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
      <div className="completed">
        <ReactCSSTransitionGroup transitionName="arrive" transitionAppear={true}>
          <section>
            <img src="img/nashville-completed.jpg"/>
            <h2><span>{message}</span></h2>
            <p><span>Thanks for completing The Haystack.  Hope you enjoyed your adventure in Nashville.</span></p>
            <Link to="launch">Start Over</Link>
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
