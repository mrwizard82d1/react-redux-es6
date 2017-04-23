/**
 * Created by larryjones on 4/22/17.
 */

// Defines all of the routes used by our application. This routes define all the paths within our application between
// "pages."

import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

/**
 * The "router" is a "react component." Its "children" define the routes between pages.
 *
 * The "parent container" (template?) for all pages is the `App` component. The default, index or home route renders the
 * `HomePage` component, and a request for "/about" renders the `AboutPage` component.
 *
 * The "logic" of the router is to examine the URL, determine the appropriate child component(s) needed for that route
 * and then pass those children as the `props.children` argument passed to `App`.
 *
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage}/>
  </Route>
);
