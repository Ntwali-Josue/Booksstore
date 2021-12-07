import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <h1>Bookstore CMS</h1>
    <Link to="/" className="nav-links">Books</Link>
    <Link to="/categories" className="nav-links">Categories</Link>
  </nav>
);

export default Navbar;
