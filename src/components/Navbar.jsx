import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">API List</Link>
      <Link to="/users">User CRUD</Link>
      <Link to="/conditional">Conditional Rendering</Link>
      <Link to="/multi-step-form">Multi-step Form</Link>
    </nav>
  );
};

export default Navbar;
