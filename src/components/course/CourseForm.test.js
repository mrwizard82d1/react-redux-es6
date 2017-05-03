/**
 * Created by larryjones on 5/3/17.
 */

import expect from "expect";
import React from "react";
import TestUtils from "react-addons-test-utils";
import CourseForm from "./CourseForm";

function setup(saving) {
  // In actual code, one typically passes arguments to components in line; that is by invoking
  // `<CourseForm course="course" onChange="onChange"/>`; however, it is easier to read tests by declaring the needed
  // properties beforehand and passing them to the component under test using the spread (`...`) operator.
  let props = {
    course: {}, // An empty course
    saving: saving, // We pass in a flag that is `true` if we are saving
    errors: {}, // No errors
    onSave: () => {}, // Do nothing
    onChange: () => {} // Ditto
  };

  // To test a component, we use a helper, the renderer.
  let renderer = TestUtils.createRenderer();

  // We render the component under test using `props` defined above.
  renderer.render(<CourseForm {...props}/>);

  // And finally, we capture the rendered output for testing.
  let output = renderer.getRenderOutput();

  // We return a number of items useful to our different tests.
  //
  // (It does seem strange (not DRY) to return both `output` and `renderer`. This choice may have to do with timing,
  // with state, or with side-effects).
  return {
    props, // Useful for creating expectations based on `props`
    output, // What we actually test
    renderer // Perhaps necessary (but perhaps not in this case)
  };
}

describe("CourseForm via React Test Utils", () => {
  it("should render a `form` tag and an `h1` tag", () => {
    const {output} = setup();
    expect(output.type).toBe("form");

    // The `let` expression destructures `output.props.children` into an array whose first element is `h1`
    let [h1] = output.props.children;
    expect(h1.type).toBe("h1");
  });

  it("should label the save button 'Save' when *not* saving", () => {
    const {output} = setup(false);
    // I assume that the submit button is the fifth child. (I count (correctly)).
    let submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe("Save");
  });

  it("should label the save button 'Saving...' when saving", () => {
    const {output} = setup(true);
    // I assume that the submit button is the fifth child. (I count (correctly)).
    let submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe("Saving...");
  });

});

