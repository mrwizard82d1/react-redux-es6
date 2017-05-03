/**
 * Created by larryjones on 4/24/17.
 */

/**
 * Defines the action types in our system.
 *
 * Putting these constants in this file is a compromise between a "global" constants file (that couples all consumers
 * to the single file) and exporting constants from the actions file itself (`courseActions.js` in our scenario).
 */

export const BEGIN_AJAX_CALL = "BEGIN_AJAX_CALL";
export const AJAX_CALL_ERROR = "AJAX_CALL_ERROR";

export const LOAD_COURSES_SUCCESS = "LOAD_COURSES_SUCCESS";
export const LOAD_AUTHORS_SUCCESS = "LOAD_AUTHORS_SUCCESS";
export const UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS";
export const CREATE_COURSE_SUCCESS = "CREATE_COURSE_SUCCESS";

