import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Hotel Paradise</div>
      <nav className="navigation">
        <a href="/">Home</a>
        <a href="/rooms">Rooms</a>
        <a href="/reservation">Reservation</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;