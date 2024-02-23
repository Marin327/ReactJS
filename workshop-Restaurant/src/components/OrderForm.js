// OrderForm.js
import React, { useState } from 'react';
import '../styles/OrderForm.css';

const OrderForm = ({ isOpen, onClose }) => {
  const [setOrderData] = 
  useState({
    itemName: '',
    quantity: 0,
    // Добавете други нужни полета за поръчката
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className={`order-form-container ${isOpen ? 'open' : ''}`}>
      <h2>Форма за поръчка</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Име на ястието:
          <input type="text" name="itemName" onChange={handleChange} />
        </label>
        <label>
          Количество:
          <input type="number" name="quantity" onChange={handleChange} />
        </label>
        <button type="submit">Поръчай</button>
      </form>
    </div>
  );
};

export default OrderForm;
