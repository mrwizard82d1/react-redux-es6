/**
 * Created by larryjones on 4/24/17.
 */

// We use React...
import React, {PropTypes} from "react";

// And `Link` from react-router.
import {Link} from "react-router";

// A React component to present a single course in a single row.
const CourseListRow = ({course}) => {
  return (
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseListRow;
