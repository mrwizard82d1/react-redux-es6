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

