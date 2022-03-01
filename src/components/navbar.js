import React from 'react';
import '../styles/navbar.css';

import logo from '../assets/Miel-Logo.png';

export default function Navbar() {
  return (
    <div className="nav_root">
      <img alt="Miel French Bakery" src={logo} className="nav_logo" />
    </div>
  );
}
