import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Column 1: Brand & Tagline */}
        <div className="footer-brand">
          <div className="footer-logo">
            {/* Make sure this path matches your logo file */}
            <img src="/my-logo.png" alt="Sky Harvest" /> 
            <span>SKY HARVEST</span>
          </div>
          <p className="footer-tagline">
            Traceable land. Transparent finance.<br />
            Trusted agriculture.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#why">Why Sky Harvest</a></li>
            <li><a href="#impact">Impact</a></li>
            <li><a href="#speak">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-contact">
          <h3>Stay Connected</h3>
          
          <div className="contact-item">
            {/* Mail Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <a href="mailto:info@skyharvest.eu">info@skyharvest.eu</a>
          </div>

          <div className="contact-item">
            {/* Mail Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <a href="mailto:corporate@skyharvest.eu">corporate@skyharvest.eu</a>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="footer-bottom">
        <p>&copy; 2025 Sky Harvest. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;