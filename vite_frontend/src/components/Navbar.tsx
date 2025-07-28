import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

// PUBLIC_INTERFACE
const Navbar: React.FC = () => {
  // Insert any necessary context hooks here (auth, cart, etc.)

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div>
          <Link to="/" className="navbar-brand">
            <span>E-Shop</span>
          </Link>
        </div>
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          <NavLink to="/orders" className={({ isActive }) => isActive ? "active" : ""}>Orders</NavLink>
          <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>Profile</NavLink>
          <NavLink to="/auth/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink>
        </div>
        <div className="navbar-icons">
          <button className="btn-icon" title="Cart"><span>🛒</span></button>
          <button className="btn-icon" title="Wishlist"><span>❤️</span></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
