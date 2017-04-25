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

    // I believe this code is temporary?!?!?!
    this.state = {
      // To allow child components to write to this component, we clone a new course from the "read-only"
      // `props.course`.
      course: Object.assign({}, props.course),
      // Additionally, I need a place to record errors.
      errors: {}
    };

    this.updateCourseState = this.updateCourseState.bind(this);
  }

  // A generic function to update the property of the course (in the state) corresponding to the edited field.
  updateCourseState(event) {
    // Determine the field that was updated.
    const field = event.target.name;

    // Determine the course once (an explaining variable)
    let course = this.state.course;

    // Update the changed field of the course
    course[field] = event.target.value;

    // Change the state (propagating changes as appropriate)
    return this.setState({course});
  }

  render() {
    return (
      <CourseForm
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        course={this.state.course}
        errors={this.state.errors} />
    );
  }
}

ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  // For now, we simply construct an empty course to wire everything up.
  let course = {id: "", watchHref: "", title: "", authorId: "", length: "", category: ""};

  // The authors is simply a list of information about each author:
  //
  // * Id
  // * First name
  // * Last name
  //
  // What we actually need for the `SelectInput` component is an object with the properties:
  //
  // * value
  // * text
  //
  // We map each author to provide that information.
  const authorsFormattedForSelection = state.authors.map(author => {
    return {
      value: author.id,
      text: `${author.firstName} ${author.lastName}`
    };
  });
  return {
    authors: authorsFormattedForSelection,
    course: course
  };
}

function mapDispatchToPage(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToPage)(ManageCoursePage);
