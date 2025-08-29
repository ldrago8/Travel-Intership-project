import React, { useState } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {!menuOpen && (
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
      )}

      {menuOpen && (
        <div className="sidebar">
          <button className="close-btn" onClick={toggleMenu}>
            &times;
          </button>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Aboutus">About Us</Link></li>
            <li><Link to="/Hotels">Hotels</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>
            <li><Link to="/News">News</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
