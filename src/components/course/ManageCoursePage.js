/**
 * Created by larryjones on 4/25/17.
 */

// Create the page to manage courses

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courseActions";
import CourseForm from "./CourseForm";

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      // To allow child components to write to this component, we clone a new course from the "read-only"
      // `props.course`.
      course: Object.assign({}, props.course),
      // Additionally, I need a place to record errors.
      errors: {}
    };
  }

  render() {
    return (
      <CourseForm
        allAuthors={[]}
        course={this.state.course}
        errors={this.state.errors} />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  // For now, we simply construct an empty course to wire everything up.
  let course = {id: "", watchHref: "", title: "", authorId: "", length: "", category: ""};
  return {
    course: course
  };
}

function mapDispatchToPage(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToPage)(ManageCoursePage);
