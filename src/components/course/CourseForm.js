/**
 * Created by CourseForm on 4/25/17.
 */

import React, {PropTypes} from "react";

// Include common components for text input and for item selection.
import {TextInput} from "../common/TextInput";
import {SelectInput} from "../common/SelectInput";

// Input form for courses
const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        errors={errors.title} />

      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        errors={errors.authorId} />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        errors={errors.category} />

      <TextInput
        name="length"
        label="Category"
        value={course.length}
        onChange={onChange}
        errors={errors.length} />

      <input
        type="submit"
        disabled={loading}
        value={loading ? "Saving..." : "Save"}
        className="btn btn-primary"
        onClick={onSave}
      />

    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
