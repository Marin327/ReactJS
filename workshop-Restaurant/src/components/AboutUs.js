// AboutUs.js
import React, { useState } from 'react';
import ReservationForm from './ReservationForm';

const AboutUs = () => {
  const [showReservationForm, setShowReservationForm] = useState(false);

  const handleReservationClick = () => {
    setShowReservationForm(!showReservationForm);
  };

  const handleReservationSubmit = (reservationData) => {
    // Тук можете да извършите допълнителна логика за обработка на резервацията
    console.log('Получени данни за резервация:', reservationData);
    // Ако искате да скриете формата след успешна резервация
    setShowReservationForm(false);
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
      <p>Добре дошли!</p>
      <button className="background-button" onClick={handleReservationClick}>
        {showReservationForm ? 'Скрий формата' : 'Заповядайте при нас'}
      </button>

      {showReservationForm && (
        <ReservationForm onReservationSubmit={handleReservationSubmit} />
      )}
    </div>
  );
};

export default AboutUs;


