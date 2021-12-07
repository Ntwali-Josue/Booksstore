import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav">
      <h1><a href="#"> Bookstore CMS</a></h1>
      <ul>
        <li><a href="#">BOOKS</a></li>
        <li><a href="#">CATEGORIES</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;