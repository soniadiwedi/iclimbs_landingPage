
import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg" alt="Company Logo" />
        <span>iClibms</span>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Career</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
