/**
 * Created by larryjones on 4/23/17.
 */

import * as types from "../actions/actionTypes";

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

export default function courseReducer(state = [], action) {
  let result = state;

  // Although handling the action types using a `switch` is the most common way of handling all the actions, bells may
  // be going off in your head. (They were in mine.) Other alternative implementations are
  //
  // * Nested `if` statements
  // * A function lookup table (a "map" keyed by the action type)

  switch (action.type) {
    case types.CREATE_COURSE:
      // Note that the simplest way to update the state would be invoking `state.push(course)` and then returning
      // `state.` However, this violates the constraint that state is *immutable*. Using the ES6 feature,
      // `Object.assign`, allows us to create a completely new array with a "deep clone" the course included. (Ah,
      // Clojure / ClojureScript...)
      //
      // `Object.assign` allows us to "merge" and number of source objects into a single target object. (Think Clojure /
      // ClojureScript `merge` function (on maps).)
      //
      // Finally, note that the spread operator, `...`, explodes its argument into the surrounding "context": an actual
      // function argument list or an array literal. (Think Clojure / ClojureScript `apply`.)

      result = [...state, Object.assign({}, action.course)];
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
