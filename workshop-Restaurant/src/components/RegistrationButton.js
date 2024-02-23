import React, { useState } from 'react';
import Registration from './Registration';

const RegistrationButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Регистрирай се</button>
      {isVisible && <Registration />}
    </div>
  );
};

export default RegistrationButton;
