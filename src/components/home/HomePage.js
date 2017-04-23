/**
 * Created by larryjones on 4/22/17.
 */

import React from 'react';
import {Link} from 'react-router';

// Although this class currently only renders markup, I have chosen to make it a class. Current limitations in
// hot-reloading require finding a class at the top of the component hierarchy on the page.
class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
