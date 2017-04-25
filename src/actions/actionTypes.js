/**
 * Created by larryjones on 4/24/17.
 */

// Defines the constant action types.
//
// Putting these constants in this file is a compromise between a "global" constants file (that couples all consumers
// to the single file) and exporting constants from the actions file itself (`courseActions.js` in our scenario).

export const LOAD_COURSES_SUCCESS = "LOAD_COURSES_SUCCESS";
export const LOAD_AUTHORS_SUCCESS = "LOAD_AUTHORS_SUCCESS";
