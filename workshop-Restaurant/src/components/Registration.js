import React, { useState } from 'react';


const Registration = ({ onRegister }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Паролите не съвпадат.');
      return;
    }
    onRegister(formData);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`registration-container ${isVisible ? 'visible' : ''}`}>
      <h2 onClick={toggleVisibility}>Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Потребителско име:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Парола:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <label>
          Повтори парола:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Регистрирай се</button>
      </form>
    </div>
  );
};

export default Registration;

