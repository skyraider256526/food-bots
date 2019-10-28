import React from "react";

import "./nav-bar.scss";

export const NavBar = () => (
  <div className="header">
    <span className='logo'>Kumba</span>
    <div className="options">
      <div className="option">About</div>
      <div className="option">Contact</div>
      <div className="option">Support</div>
    </div>
  </div>
);
