/**
 * Created by larryjones on 4/25/17.
 */

// Create all the load authors actions.

import * as types from "./actionTypes";
import AuthorApi from "../api/mockAuthorApi";
import {beginAjaxCall} from "./ajaxStatusActions";


/**
 * Return the load authors action.
 * @param authors - The successfully loaded authors.
 * @returns {{type, authors: *}} - The load author action.
 */
export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

/**
 * Asynchronously loads authors from a remote source.
 * @returns {function(*)} The thunk that, when invoked, will download authors and dispatch the action when the authors
 * are successfully downloaded.
 *
 * Remember that this function is a higher order function: it returns a function accepting a `dispatch`. This outer
 * function, a thunk, invokes `AuthorApi.getAllAuthors` handling the `Promise` by invoking `dispatch` the `Promise` is
 * resolved (that is, when all authors are downloaded and available).
 */
export function loadAuthors() {
  return dispatch => {
    dispatch(beginAjaxCall);
    return AuthorApi.getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        throw(error);
      });
  };
}
