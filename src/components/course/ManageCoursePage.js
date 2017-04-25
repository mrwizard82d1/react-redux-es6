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
    this.saveCourse = this.saveCourse.bind(this);
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

  saveCourse(event) {
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.context.router.push("/courses");
  }

  render() {
    return (
      <CourseForm
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        course={this.state.course}
        errors={this.state.errors} />
    );
  }
}

ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

// The `react-router` package provides a number of ways to redirect. We saw one in `CoursesPage.redirectToCoursePage`.
// In this module, I the global context type of `router` from `react-router`.
//
// To use context types (which are global), I must "opt-in" to using the router context. The router
// context is not available by default because it is *global* state. Generally, we want to avoid global state; however,
// allowing a library or consumer author to opt-in allows one to avoid boilerplate code (not demonstrated) to access
// routing information.
//
// Because `context` is a static, I must opt-in by attaching it to the class.
ManageCoursePage.contextTypes = {
  // Note: *not* making this property required avoids a lint warning in a future module. Behavior is not impacted.
  router: PropTypes.object
};

function getCourseById(id, courses) {
  // search for all courses with matching id's
  const soughtCourses = courses.filter(course => course.id == id);

  // if a matching course is found
  if (soughtCourses.length) {
    // return the first match
    return soughtCourses[0];
  }

  // otherwise, return no match
  return null;
}

function mapStateToProps(state, ownProps) {
  // For now, we simply construct an empty course to wire everything up.
  let course = {id: "", watchHref: "", title: "", authorId: "", length: "", category: ""};

  // If the user selected a course to navigate to this page, the url will be of the form "/course/:id." To get the url,
  // we use the 'ownProps` parameter which has routing information.
  if (ownProps.params.id) {
    course = getCourseById(ownProps.params.id, state.courses);
  }

  // Map the author information to author "view information"
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
