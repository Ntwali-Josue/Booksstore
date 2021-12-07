import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <h1>Bookstore CMS</h1>
      <Link to="/books" className="nav-links">Books</Link>
      <Link to="/categories" className="nav-links">Categories</Link>i
    </nav>
  );
}

export default Navbar;
