/**
 * Created by larryjones on 4/22/17.
 */

import React, {PropTypes} from "react";
import {IndexLink} from "react-router";
import LoadingDots from "./LoadingDots";

/**
 * A stateless React component modeling the header of each page of our app.
 * @param loading - True if I am loading asynchronous data.
 * @returns {XML} - The markup for the page header.
 *
 * This component simply renders a sequence of links, separated by vertical bars ("|"). Note that the whitespace around
 * the separator provides visual separation without styling.
 *
 * Because this component just contains markup, I will make it a stateless component.
 */
const Header = ({loading}) => {
  // The `LoadingDots` components is only rendered if `loading` is true. (It is an "expression-oriented conditional.")
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <IndexLink to="/courses" activeClassName="active">Courses</IndexLink>
      {" | "}
      <IndexLink to="/about" activeClassName="active">About</IndexLink>
      {loading && <LoadingDots interval={100} dots={21}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
