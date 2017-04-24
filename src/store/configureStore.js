/**
 * Created by larryjones on 4/23/17.
 */

// Defines a function to create our configured application store. Our application entry point will call this function
// at "system start" create and configure the store at "system start."

import {createStore, applyMiddleware} from "redux";

// To configure our application store, we must supply the root reducer we created previously.
import rootReducer from "../reducers/index";

// This middleware wil warn us if we (inadvertently) change the application state in our JavaScript code.
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

// This middleware supports the use of asynchronous actions.
import thunk from "redux-thunk";

// Create the newly configured application store.
//
// One can use `initialState` to specify the initial state of the store. Specifying the initial state is, apparently,
// very useful in scenarios employing server side rendering.
export default function configureStore(initialState) {
  // To configure this store, we must supply the root reducer, this allows the store to delegate actions to the root
  // reducer which in turn, delegates to our indivdual reducers.
  //
  // Finally, we supply middleware. The specific middleware we use ensures that we cannot inadvertently change the
  // state without going through 'setState'.
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
