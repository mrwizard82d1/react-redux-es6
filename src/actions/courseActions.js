/**
 * Created by larryjones on 4/23/17.
 */

// The (Redux) actions related to courses.
//
// Because we typically have *many* actions, we will export all functions (and will provide *no* default).

import * as types from "./actionTypes";

// Import the (mock) course API.
import courseApi from "../api/mockCourseApi";
import {beginAjaxCall, ajaxCallError} from "./ajaxStatusActions";

/**
 * Create an action assuming successfully loaded from external API.
 *
 * @param courses - The successfully loaded courses.
 * @returns {{type, courses: *}} - A Redux action containing a type and the successfully downloaded courses.
 *
 * This particular action only fires if the API successfully loaded all the courses. We have, at least for now, chosen
 * very simple error handling (throwing an error). However, in production, we might create another action called, for
 * example, `loadCoursesError` or `loadCoursesFailure`. By including the "Successful" (or perhaps better, "Succeeded,")
 * suffix, we clarify that this action *only* occurs if loading the courses (asynchronously) was successful.
 */
function loadCoursesSuccessful(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

/**
 * Create an action indicating that a course was successfully updated.
 *
 * @param course - The updated course.
 * @returns {{type, course: *}} - The action to be dispatched.
 *
 */
export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

/**
 * Create an action indicating that a course was successfully created.
 *
 * @param course - The created course.
 * @returns {{type, course: *}} - The action to be dispatched.
 *
 */
export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

/**
 * Loads courses from an "external" API.
 *
 * @returns {Function} - Returns a dispatch function. Because this function involves an asynchronous call, the returned
 * function is actually a "thunk" that, when invoked, will invoke the asynchronous call and will then dispatch the
 * appropriate action when the call's results are available.
 */
export function loadCourses() {
  // Returning a function accepting a `dispatch` function is boilerplate present in every action involving a thunk.
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccessful(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}

/**
 * Saves a course
 * @param course - The (changed) course to be saved.
 * @returns {Function} - The "thunk" wrapping an asynchronous function that dispatches an action when complete.
 */
export function saveCourse(course) {
  // Although not used in this example, `getState` is a(n optional) function that allows this thunk to get the current
  // state of the store.
  //
  // Because this function has the 'course` parameter set to the course to be changed, we do not need to use `getState`;
  // however, in some usage scenarios, the caller may not have the updated (partial) state.
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course)
      .then(savedCourse => {
        // If the course already exists (that is, `course.id` is truthy), dispatch the update course successful action.
        // If the course does not exist (`course.id` is falsey), dispatch the create course successful action.
        dispatch(course.id ? updateCourseSuccess(savedCourse) : createCourseSuccess(savedCourse));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw error;
      });
  };
}
