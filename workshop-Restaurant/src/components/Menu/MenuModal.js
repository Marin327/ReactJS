import React, { useState } from 'react';

const MenuModal = () => {
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');

  const handleOrderSubmit = () => {
    // Обработка на поръчката, може да използвате стейтовете contact, address, deliveryTime и paymentAmount
    console.log('Поръчката е потвърдена:', { contact, address, deliveryTime, paymentAmount });
  };

  return (
    <div className="menu-modal">
      <h2>Меню за поръчка</h2>
      <label>
        Тел:
        <input
          type="number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </label>
      <label>
        Адрес:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <label>
        Желан час за доставка:
        <input
          type="text"
          value={deliveryTime}
          onChange={(e) => setDeliveryTime(e.target.value)}
        />
      </label>
      <label>
        Сума за плащане:
        <input
          type="text"
          value={paymentAmount}
          onChange={(e) => setPaymentAmount(e.target.value)}
        />
      </label>
      <button onClick={handleOrderSubmit}>Потвърди поръчката</button>
    </div>
  );
};

export default MenuModal;
