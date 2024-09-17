import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Optional: if you have styles for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
        <li>
          <Link to="/contact-list">Contact List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
