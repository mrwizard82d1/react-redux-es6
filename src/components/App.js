/**
 * Created by larryjones on 4/22/17.
 */

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import Header from "./common/Header";

/**
 * Provides the common skeleton for each and every page in our app.
 */
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
        <Header loading={this.props.loading}/>
        {this.props.children}
      </div>
    );
  }
}

/**
 * We define `PropTypes` (and, optionally, `defaultProps`) for all instances of the class.
 * @type {{children: *}}
 */
App.propTypes = {
  // Whatever object is passed for `props` *must* define a property named `children`
  children: PropTypes.object.isRequired,
  // And a property named `loading` with a `boolean` value
  loading: PropTypes.bool.isRequired
};

/**
 * Maps from the UI state to the props needed by this component.
 * @param state - The state used to render the UI.
 * @param ownProps - The properties owned by the component. This props provide access to routing information etc.
 */
function mapStateToProps(state, ownProps) {
  return {loading: state.ajaxCallsInProgressCount > 0};
}

export default connect(mapStateToProps)(App);
