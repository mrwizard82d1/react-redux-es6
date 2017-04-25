/**
 * Created by larryjones on 4/25/17.
 */

// Create all the load authors actions.

import * as types from "./actionTypes";
import AuthorApi from "../api/mockAuthorApi";


// The action invoked if all authors successfully loaded from an external source.
//
// This action is only invoked if all authors were asynchronously loaded from the external source.
export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}
// The function to asynchronously load authors from a remote source.
//
// Remember that this function is a higher order function: it returns a function accepting a `dispatch`. This outer
// function, a thunk, invokes `AuthorApi.getAllAuthors` handling the `Promise` by invoking `dispatch` the `Promise` is
// resolved (that is, when all authors are downloaded and available).
export function loadAuthors() {
  return dispatch => {
    return AuthorApi.getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        throw(error);
      });
  };
}
