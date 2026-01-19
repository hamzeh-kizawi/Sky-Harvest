import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="/my-logo.png" alt="Sky Harvest" className="logo-img" /> 
          <span className="logo-text">SKY HARVEST</span>
        </a>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <svg viewBox="0 0 24 24" width="30" height="30" fill="white"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          ) : (
            <svg viewBox="0 0 24 24" width="30" height="30" fill="white"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
          )}
        </div>

        {/* Menu Links */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#home" className="nav-links" onClick={closeMobileMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-links" onClick={closeMobileMenu}>Our Services</a>
          </li>
          <li className="nav-item">
            <a href="#why" className="nav-links" onClick={closeMobileMenu}>Why</a>
          </li>
          <li className="nav-item">
            <a href="#impact" className="nav-links" onClick={closeMobileMenu}>Impact</a>
          </li>
          <li className="nav-item">
            <a href="#invest" className="nav-links" onClick={closeMobileMenu}>Invest</a>
          </li>
          <li className="nav-item">
            {/* CHANGED: className is now "nav-links" (same as others) */}
            <a href="#speak" className="nav-links" onClick={closeMobileMenu}>Speak</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;