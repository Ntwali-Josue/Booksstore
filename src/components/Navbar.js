import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../images/profile.png';

const Navbar = () => (
  <nav className="nav">
    <h1>Bookstore CMS</h1>
    <div className="links">
      <Link to="/" className="nav-links">BOOKS</Link>
      <Link to="/categories" className="nav-links">CATEGORIES</Link>
    </div>
    <div className="profile">
      <img src={profile} alt="profile" />
    </div>
  </nav>
);

export default Navbar;
