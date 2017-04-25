/**
 * Created by larryjones on 4/23/17.
 */

import * as types from "../actions/actionTypes";
import initialState from "./initialState";

// Applies a change to the state managed by the Redux store returning a new state (instance). (Think
// (Clojure / ClojureScript).
//
// Append the suffix, 'Reducer' to make it easier to identify its purpose among the project files and among open editor
// tabs.
//
// Typically, we have only one reducer for all (course) actions; consequently, we export this function as the `default`
// value. Additionally, because we only export a single value, we actually need not name the function `courseReducer`
// at all. However, providing an (internal) name better communicates the purpose of this function.
//
// A question might arise (but I had missed it): how do we set the initial state? We choose to set the initial state by
// using the ES6 default value syntax. Using this syntax indicates that our initial state is an empty array of courses;
// that is, no courses. (I'm not certain how one might initialize the state otherwise.)

export default function courseReducer(state = initialState.courses, action) {
  let result = state;

  // Although handling the action types using a `switch` is the most common way of handling all the actions, bells may
  // be going off in your head. (They were in mine.) Other alternative implementations are
  //
  // * Nested `if` statements
  // * A function lookup table (a "map" keyed by the action type)

  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      // This action *completely replaces* any state that we had. You have been warned.
      //
      // An alternative, if we might load courses from multiple sources, would be to somehow merge the existing state
      // with the returned state. In our application, this choice is fine, but might not be robust in other use cases.
      result = action.courses;
      break;

    case types.CREATE_COURSE_SUCCESS:
      // Append (a clone of) the newly created course to (a clone of) the state. (Remember to preserve immutability!)
      result = [...state, Object.assign({}, action.course)];
      break;

    case types.UPDATE_COURSE_SUCCESS:
      // Replace the original course with (a clone of) the updated course. (Remember to preserve immutability!)
      result = [...state.filter(course => course.id != action.course.id), Object.assign({}, action.course)];
      break;

    default:
      // We expect to receive actions that we *do not* handle; if so, we simply return the existing state. (Seems
      // strange to me, but...)
      //
      // Because we initialized result to `state` already, we do nothing.
      break;
  }
  return result;
}
