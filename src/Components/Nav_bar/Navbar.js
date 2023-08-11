import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div class="navbar">
    <div class="logo">
      <span class="logo-text">StayHealthy</span>
    </div>
    <div class="nav-links">
      <a href="#">Home</a>
      <a href="#">Appointments</a>
      <a href="#">Health Blog</a>
      <a href="#">Reviews</a>
    </div>
    <div class="action-buttons">
      <button class="rounded-button">Sign Up</button>
      <button class="rounded-button">Login</button>
    </div>
  </div>
  );
};
 

export default Navbar;
