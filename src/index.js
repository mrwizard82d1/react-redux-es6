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
import 'babel-polyfill';
import React from 'react';
// `react-dom` was split off from `react` in version 1.4; consequently, when one must render into the browser, one
// must pull in `react-dom`.
import {render} from 'react-dom';
// `Router` provides the React component for managing routes that wraps all our other components. Additionally,
// `browserHistory` provides one with clean URL's (no octothorpes ('#')).
import {Router, browserHistory} from 'react-router';
import routes from './routes';
// Webpack can bundle not only JavaScript files but other files as well. For example, we bundle some style information
// that we (will eventually) need.
import './styles/styles.css'; // Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// To start the application, I render the router into the `app` element of `index.js`
render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById("app")
);
