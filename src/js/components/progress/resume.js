import React, {PropTypes} from 'react/addons';
let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
import Parse from '../../parse';

class Resume extends React.Component {
  onSubmit() {
    this.context.router.transitionTo('before');
  }

  render() {
    let user = Parse.User.current();

    if (!user) {
      return <div>Please Login</div>
    }

    if (this.props.order > 0) {
      return (
        <div className="resume">
          <ReactCSSTransitionGroup transitionName="arrive" transitionAppear={true}>
            <section>
              <h2>{user.get('firstName')}, resume your hunt.</h2>
              <p>Looks like you already started The Haystack. Resume your adventure.</p>
              <button onClick={this.onSubmit.bind(this)} ref="resume">Resume Your Hunt</button>
            </section>
          </ReactCSSTransitionGroup>
        </div>
      )
    } else {
      return <div/>
    }
  }
};

Resume.contextTypes = {
    router: React.PropTypes.func
};

Resume.defaultProps = {
  order: 0
};

export default Resume;
