/**
 * Created by larryjones on 4/25/17.
 */

// Create the page to manage courses

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courseActions";

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <h1>Manage Course</h1>
    );
  }
}

ManageCoursePage.propTypes = {
  // myProps: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

function mapDispatchToPage(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToPage)(ManageCoursePage);
