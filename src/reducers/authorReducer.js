/**
 * Created by larryjones on 4/25/17.
 */

// Update the UI state with author information.

import * as types from "../actions/actionTypes";

export default function authorReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      // return the *unchanged* state for an unhandled action.
      return state;
  }
}
