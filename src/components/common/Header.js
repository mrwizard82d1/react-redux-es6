/**
 * Created by larryjones on 4/22/17.
 */

import React from 'react';
import {IndexLink} from 'react-router';

// The page header.
//
// This component simply renders a sequence of links, separated by vertical bars ('|'). Note that the whitespace around
// the separator provides visual separation without styling.
//
// Because this component just contains markup, I will make it a stateless component.
const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <IndexLink to="/courses" activeClassName="active">Courses</IndexLink>
      {" | "}
      <IndexLink to="/about" activeClassName="active">About</IndexLink>
    </nav>
  );
};

export default Header;
