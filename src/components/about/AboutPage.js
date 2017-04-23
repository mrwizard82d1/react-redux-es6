/**
 * Created by larryjones on 4/22/17.
 */

import React from 'react';

// A popular convention is to name files containing react components using Pascal case.

// Although this class currently only renders markup, I have chosen to make it a class. Current limitations in
// hot-reloading require finding a class at the top of the component hierarchy on the page.
class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        This application uses React, Redux, React Router and a variety of other helpful libraries.
      </div>
    );
  }
}

export default About;
