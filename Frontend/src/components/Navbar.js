import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Signup</Link></li>
      <li><Link to="/employees">Employee List</Link></li>
    </ul>
  </nav>
);

export default Navbar;
