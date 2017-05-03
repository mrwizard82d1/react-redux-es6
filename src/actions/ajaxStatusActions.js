/**
 * Created by larryjones on 4/27/17.
 */

import * as types from "./actionTypes";
import initialState from "../reducers/initialState";

/**
 * Action to fire when an AJAX call begins.
 */
export function beginAjaxCall() {
  return {type: types.BEGIN_AJAX_CALL};
}

/**
 * Action to fire when an error occurs during an AJAX call.
 */
export function ajaxCallError() {
  return {type: types.AJAX_CALL_ERROR};
}

