/**
 * Created by larryjones on 5/3/17.
 */

import expect from "expect";
import React from "react";
import {mount, shallow} from "enzyme";
import CourseForm from "./CourseForm";

function setup(saving) {
  const props = {
    course: {}, // empty course
    saving: saving, // saving course based on `saving` argument
    errors: {}, // no errors
    onSave: () => {}, // nada
    onChange: () => {} // ditto
  };

  // Construct an instance from the properties
  return shallow(<CourseForm {...props} />);
}

describe("CourseForm via Enzyme", () => {
  it("should have a top-level `form` with an `h1` child", () => {
    const wrapper = setup(false);

    // Expect exactly one `form` component
    expect(wrapper.find("form").length).toBe(1);

    // Expect to find an `h1` tag with the text "Manage Course"
    expect(wrapper.find("h1").text()).toEqual("Manage Course");
  });

  it("should label the submit button 'Save' if *not* saving", () => {
    const wrapper = setup(false);

    // Expect submit button to have text "Save" if *not* saving
    expect(wrapper.find("input").props().value).toEqual("Save");
  });

  it("should label the submit button 'Saving...' if saving", () => {
    const wrapper = setup(true);

    // Expect submit button to have text "Saving..." if saving
    expect(wrapper.find("input").props().value).toEqual("Saving...");
  });

});
