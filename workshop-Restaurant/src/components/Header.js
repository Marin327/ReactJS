// Header.js
import React from 'react';


const Header = ({ onComponentChange }) => {
  return (
    <div className="header">
      <button onClick={() => onComponentChange('aboutUs')}>ЗА НАС</button>
      <button onClick={() => onComponentChange('contact')}>КОНТАКТИ</button>
      <button onClick={() => onComponentChange('registration')}>РЕГИСТРАЦИЯ</button>
      <button onClick={() => onComponentChange('login')}>ВЛИЗАНЕ</button>
      <button onClick={() => onComponentChange('menu')}>МЕНЮ</button>
    </div>
  );
};

export default Header;
