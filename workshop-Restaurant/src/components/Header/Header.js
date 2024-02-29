// Header.js
import React from 'react';
 const Header = ({ onComponentChange }) => {
  return (
    <div className="header">
      <button onClick={() => onComponentChange('About')}>ЗА НАС</button>
      <button onClick={() => onComponentChange('Contact')}>КОНТАКТИ</button>
      <button onClick={() => onComponentChange('Registration')}>РЕГИСТРАЦИЯ</button>
      <button onClick={() => onComponentChange('Login')}>ВЛИЗАНЕ</button>
      <button onClick={() => onComponentChange('Menu')}>МЕНЮ</button>
    </div>
  );
};

export default Header;