import React from 'react';
import {Link} from 'react-router';

const Nav = () => (
  <div className="nav">
    <ul className="column">
      <Link to="/hello-world" activeClassName="active">Hello World</Link>
    </ul>
  </div>
);

export default Nav;