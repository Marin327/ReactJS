import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Contact us at: info@hotelparadise.com</p>
        <p>123 Main Street, Paradise City</p>
      </div>
      <div className="social-links">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;