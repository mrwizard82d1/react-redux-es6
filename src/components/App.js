/**
 * Created by larryjones on 4/22/17.
 */

import React, {PropTypes} from 'react';
import Header from './common/Header';

// This component provides the common skeleton for each and every page in our app.
class App extends React.Component {
  render() {
    return (
      // The "container-fluid" provides a container for other elements spanning the full width of the device viewport.
      //
      // Including `{this.props.children}` results in rendering *all* its child components on this page. Thus, one
      // changes page contents by changing children. (Where does `state` come in?)
      //
      // Note that `react-router` has the responsibility to pass in the appropriate children for each and every page.
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

// We define `PropTypes` (and `defaultProps`) for the entire class. (Thus, defining them "out of line" of the class
// definition.
App.propTypes = {
  // Whatever object is passed for `props` *must* define a property named `children`.
  children: PropTypes.object.isRequired
};

export default App;
