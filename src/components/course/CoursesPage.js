/**
 * Created by larryjones on 4/22/17.
 */

import React from "react";

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

export default CoursesPage;
