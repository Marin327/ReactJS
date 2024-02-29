import React, { useState, useEffect } from 'react';
import RegistrationButton from '../Registration/RegistrationButton';
import MenuModal from '../Menu/MenuModal'; // Предполагам, че имате компонент за модалното меню

const Home = () => {
  const [restaurantName, setRestaurantName] = useState(null);
  const [isMenuVisible, setMenuVisibility] = useState(false);

  useEffect(() => {
    // Симулираме заявка към сървъра за взимане на информация за ресторанта
    // За целите на примера, просто използваме таймаут, за да изчакаме 1 секунда преди да покажем ресторанта
    const fetchRestaurantInfo = () => {
      setTimeout(() => {
        setRestaurantName(" Лилия ");
      });
    };

    fetchRestaurantInfo();
  }, []); // Празен масив гарантира, че useEffect ще се изпълни само веднъж при монтаж на компонента

  const handleOrderButtonClick = () => {
    setMenuVisibility(true);
  };

  const handleMenuClose = () => {
    setMenuVisibility(false);
  };

  return (
    <div>
      {/* други компоненти или секции */}
      {restaurantName ? (
        <div>
          <h1>{restaurantName}</h1>
          <p>Ресторантът на Шеф Манчев</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <button onClick={handleOrderButtonClick}>ПОРЪЧАЙ ХРАНА</button>

      {isMenuVisible && (
        <MenuModal onClose={handleMenuClose} />
        )}
      <RegistrationButton />
    </div>
  );
};

export default Home;
