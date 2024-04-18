import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li><Link to="home" smooth={true} duration={1000}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
        <li><Link to="how-to-buy" smooth={true} duration={1000}>How to Buy</Link></li>
        <li><Link to="roadmap" smooth={true} duration={1000}>Roadmap</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
