/**
 * Created by larryjones on 4/24/17.
 */

import React, {PropTypes} from "react";

// This component depends on another component that presents a course as a single row.
import CourseListRow from "./CourseListRow.js";

// A React component for displaying the course list.
//
// This component is a *stateless* component. It consists of a single function that returns markup that *only*
// depends on the properties (an object with two properties named `courses` and `deleteCourses` (currently unused)).
const CourseList = ({courses}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
      {courses.map(course =>
        <CourseListRow key={course.id} course={course} />
      )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
