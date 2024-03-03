import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../App.css';

const Header = () => {
  const headerAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  return (
    <animated.header style={headerAnimation} className="header">
      <div className="logo">Спа Хотел Парадайс: Стилен Хотел в село Баня</div>
      <nav className="navigation">
        <a href="/">Начало</a>
        <a href="/rooms">Стаи</a>
        <a href="/reservation">Резервация</a>
        <a href="/gallery">Галерия</a>
        <a href="/contact">Контакт</a>
      </nav>
    </animated.header>
  );
}

export default Header;