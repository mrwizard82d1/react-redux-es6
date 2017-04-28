/**
 * Created by larryjones on 4/27/17.
 */

import * as types from "../actions/actionTypes";
import initialState from "./initialState";

/**
 * Determines if this action type indicates success.
 *
 * @param actionType - The action type (name).
 */
function actionTypeIndicatesSuccess(actionType) {
  return actionType.substring(actionType.length - 8) === "_SUCCESS";
}

/**
 * Updates state when the BEGIN_AJAX_CALL action is invoked.
 *
 * @param state - The (slice of) state  of the application.
 * @param action - The action being performed.
 */
export default function ajaxStatusReducer(state=initialState.ajaxCallsInProgressCount, action) {
  if (action.type === types.BEGIN_AJAX_CALL) {
    return state + 1;
  }
  else if (actionTypeIndicatesSuccess(action.type)) {
    // This is our first reducer that handles more than one action. Remember that this is okay - and even expected. Each
    // reducer only handles a small slice of state; however, a single action may affect more than one slice.
    return state - 1;
  }

  // return state unchanged
  return state;
}

