/**
 * Created by larryjones on 4/21/17.
 */

// The babel transpiler cannot transpile all ES6 features; consequently, we need to include `babel-polyfill` to
// correctly transpile everything.
//
// Including `babel-polyfill` is expensive (50 kBytes). In a production environment, it may be more performant to only
// include the polyfill features that are needed. For example, in this course, the only feature not transpilable is
// `Object.assign`. We could have just included that polyfill to optimize downloads. However, for simplicity, we
// have simply included everything.
import "babel-polyfill";
import React from "react";

// `react-dom` was split off from `react` in version 1.4; consequently, when one must render into the browser, one
// must pull in `react-dom`.
import {render} from "react-dom";

// Import our `configureStore` function so we can create our configured store at application start.
import configureStore from "./store/configureStore";

// To pass the configured store to the application, we use a `Provider` component that wraps the `Router`.
import {Provider} from "react-redux";

// `Router` provides the React component for managing routes that wraps all our other components. Additionally,
// `browserHistory` provides one with clean URL"s (no octothorpes ("#")).
import {Router, browserHistory} from "react-router";
import routes from "./routes";

// Webpack can bundle not only JavaScript files but other files as well. For example, we bundle some style information
// that we (will eventually) need.
import "./styles/styles.css"; // Webpack can import CSS files too!
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// To load all courses at system start, I use the action, `LOAD_COURSES_SUCCESSFUL`.
import {loadCourses} from "./actions/courseActions";

// Create a configured Redux application store.
//
// Configure store takes an initial state. If one supplies it, it overrides the default `state` argument in
// `courseReducer`. The value for this alternative initial state might be supplied from the server or from local
// storage.
const store = configureStore();

// After the store is configured, I can dispatch any (initialization) actions, like loading courses.
//
// Originally, I simply called `loadCourses()`. This expression returns a function that can be dispatched, but does not
// actually dispatch the eventual action. Consequently, my observation of never taking any breakpoints I inserted now
// makes perfect sense. :)
//
// The instructor mentioned another approach of injecting JSON into the head of our page. This approach might be used if
// we had chosen to perform server side rendering. The approach here, invoking `store.dispatch` with the action returned
// by `loadCourses()` requires *no* server side rendering.
//
// Because of the way we invoke the asynchronous `loudCourses`, we only experience the delay on page refresh.
// Specifically, if one is on the home page, refreshes the page and then navigates to "Courses," one will experience
// *instantaneous* display of the course list. (This behavior is a consequence of loading the courses at *application
// start* and not at page refresh.)
//
// However, if one navigates to the "Courses" page and then refreshes the page, one will experience the ~1s delay
// specified in "./api/delay.js."
store.dispatch(loadCourses());

// To start the application, I render the router into the `app` element of `index.js`
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("app")
);
