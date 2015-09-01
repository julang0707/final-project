import React, {PropTypes} from 'react';

import Parse from '../parse';

class LocationDetails extends React.Component {

  render() {

    return (
      <div className="location-details">
        <section>
          <img ref="image" className="image" src="#"/>
          <h2 ref="title" className="title">Title</h2>
          <p ref="description" className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <input ref="unlock-code" className="unlock-code" type="text" placeholder="Enter your code"/>
          <button ref="unlock">Unlock</button>
        </section>
      </div>
    )
  }
};

LocationDetails.contextTypes = {
    router: React.PropTypes.func
};

export default LocationDetails;
