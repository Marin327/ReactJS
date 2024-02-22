// OrderButton.js
import React from 'react';
import '../styles/OrderButton.css';

const OrderButton = ({ onOrder }) => {
  const handleOrderClick = () => {
    onOrder();
  };

  return (
    <button className="order-button" onClick={handleOrderClick}>
      Поръчай
    </button>
  );
};

export default OrderButton;

