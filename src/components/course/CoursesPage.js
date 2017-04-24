/**
 * Created by larryjones on 4/22/17.
 */

import React from "react";

// We now connect this component to the application store using `connect`
import {connect} from "react-redux";

// Import the course actions
import * as courseActions from "../../actions/courseActions";

class CoursesPage extends React.Component {
  // Initialize this React component with properties and a(n React) context.
  constructor(props, context) {
    super(props, context);

    // The state of an instance consists, for now, of a single course with a single property identified by "title."
    this.state = {
      course: {title: ""}
    };

    // Previously, the value assigned to `this` in the `changeTitle` method depended on the "JavaScript this rules"
    // (https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md). Specifically,
    // since a UI element invoked `changeTitle`, `this`, within that method, referred to `undefined`.
    // Since the UI element did not, hopefully, have a state method, the browser warned us:
    //
    // Uncaught TypeError: Cannot read property 'state' of undefined.
    //
    // To repair this error, I must explicitly bind this when invoking this method.
    this.changeTitle = this.changeTitle.bind(this);

    // To correctly use `saveChanges`, I must bind the `this` argument similarly.
    this.saveChanges = this.saveChanges.bind(this);
  }

  // Change the title in response to the supplied event.
  changeTitle(event) {
    // Get the course so we can use it to update the state later.
    const course = this.state.course;

    // Change the course title to the new title.
    course.title = event.target.value;

    // Set (update) the state of this (React) component.
    this.setState({course: course});
  }

  // Save any changes the user made to the course.
  saveChanges(event) {
    // This technique is the most verbose (and "ugly") way to dispatch an action. In the future, we will see other,
    // more terse (elegant) ways to dispatch actions.
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  render() {
    // Return a component with two children: a general header and a form for entering a new course.
    //
    // The form itself has a "title" and two input elements: the title text and a submit button.
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input type="text"
               onChange={this.changeTitle}
               value={this.state.course.title} />
        <input type="submit"
               value="Save"
               onClick={this.saveChanges} />
      </div>
    );
  }
}

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
export default connect(mapStateToProps)(CoursesPage);
