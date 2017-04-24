/**
 * Created by larryjones on 4/22/17.
 */

import React, {PropTypes} from "react";

// We now connect this component to the application store using `connect`
import {connect} from "react-redux";

// Use `bindActionCreators` to map *all* actions in a file.
import {bindActionCreators} from "redux";

// Import the course actions
import * as courseActions from "../../actions/courseActions";

class CoursesPage extends React.Component {
  // Initialize this React component with properties and a(n React) context.
  constructor(props, context) {
    super(props, context);
  }

  // Returns markup for a single course row.
  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    // Return a component with two children: a general header and a form for entering a new course.
    //
    // The form itself has a "title" and two input elements: the title text and a submit button.
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

// `mapStateToProps` maps the application state to properties.
//
// The second parameter, `ownProps`, allows this function to use the component's "own" properties (not inherited
// properties) to implement the necessary mapping.
//
// In this case, we gain access to the routing related properties for the application.
function mapStateToProps(state, ownProps) {
  return {
    // Because in `index.js`, we refer to this state as `courses` (and not `courseReducer`), we can refer to it as
    // `state.courses`.
    courses: state.courses
  };
}

// Encapsulates `this.props.dispatch` behind domain-specific names (like `createCourse`)
//
// The framework supplies the `dispatch` function. The implementation hides this name behind domain-specific function
// names.
function mapDispatchToProps(dispatch) {
  // Previous commits used a manually technique to map `dispatch` to `this.props`. Because this mapping is so common,
  // redux provides a helper method to map *all* actions at one time.
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

// To connect this page to the Redux store, we export the decorated component.
//
// The syntax is unusual because `connect` is a higher-order function. Invoking `connect` returns a *function* that
// accepts the React component that needs to connect to the Redux application store.
//
// Connect accepts two function parameters:
// * `mapStateToProps`
// * `mapDispatchToProps` (optional)
//
// If we *do not* supply `mapDispatchToProps`, `connect` injects a second parameter that can be accessed by
// `this.props.dispatch` that allows me to fire off actions.
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
