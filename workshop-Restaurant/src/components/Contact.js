// AboutUs.js
import React, { useState } from 'react';
import ReservationForm from './ReservationForm'; // Импорт на компонент за формата за резервация

const AboutUs = () => {
  const [showReservationForm, setShowReservationForm] = useState(false);

  const handleReservationClick = () => {
    setShowReservationForm(!showReservationForm);
  };

  return (
    <div className="about-us-container">
      <p>
        Вкусната храна и уютната обстановка са само началото на един добър бизнес обяд или просто похапване в добра компания.
        Музиката е приятно тиха и специално подбрана. С приятели, колеги или със семейството си - заповядайте при нас,
        за да прекарате приятно свободното си време и да опитате майсторството на нашата кухня.
      </p>
      <p>
        Ресторантът разполага с 2 салона, 2 градини (лятна и зимна) и 2 VIP сепарета.
      </p>
     
      <p>
        <strong>Адрес:</strong> Улица "Московска" 15, град София
      </p>
      <p>
        <strong>Работно време:</strong> Понеделник - Неделя: 9:00 ч. - 22:00 ч.
      </p>
      <p>
        Добре дошли!
      </p>
      <button className="background-button" onClick={handleReservationClick}>
        {showReservationForm ? 'Скрий формата' : 'Заповядайте при нас'}
      </button>

      {showReservationForm && <ReservationForm />} {/* Показва формата за резервация, ако showReservationForm е true */}
    </div>
  );
};

export default AboutUs;
