// OrderButton.js
import React from 'react';

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

