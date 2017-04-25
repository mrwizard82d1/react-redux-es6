/**
 * Created by larryjones on 4/23/17.
 */

// The (Redux) actions related to courses.
//
// Because we typically have *many* actions, we will export all functions (and will provide *no* default).

import * as types from "./actionTypes";

// Import the (mock) course API.
import courseApi from "../api/mockCourseApi";

// Create an action assuming successfully loaded from external API.
//
// This particular action only fires if the API successfully loaded all the courses. We have, at least for now, chosen
// very simple error handling (throwing an error). However, in production, we might create another action called, for
// example, `loadCoursesError` or `loadCoursesFailure`. By including the "Successful" (or perhaps better, "Succeeded,")
// suffix, we clarify that this action *only* occurs if loading the courses (asynchronously) was successful.
function loadCoursesSuccessful(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

// Load courses from an "external" API.
//
// This function is a higher order function that *returns* a function accepting a `dispatch`.
export function loadCourses() {
  // Returning a function accepting a `dispatch` function is boilerplate present in every action involving a thunk.
  return function(dispatch) {
    return courseApi.getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccessful(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}

// Saves a course.
//
// This function is a higher order function that *returns* a function accepting a `dispatch`.
export function saveCourse(course) {
  // Although not used in this example, `getState` is a(n optional) function that allows this thunk to get the current
  // state of the store.
  //
  // Because this function has the 'course` parameter set to the course to be changed, we do not need to use `getState`;
  // however, in some usage scenarios, the caller may not have the updated (partial) state.
  return function(dispatch, getState) {
    return courseApi.saveCourse(course)
      .then(savedCourse => {
        // If the course already exists (that is, `course.id` is truthy), dispatch the update course successful action.
        // If the course does not exist (`course.id` is falsey), dispatch the create course successful action.
        dispatch(course.id ? updateCourseSuccess(savedCourse) : createCourseSuccess(savedCourse));
      })
      .catch(error => {
        throw error;
      });
  };
}
