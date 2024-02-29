// ReservationForm.js
import React, { useState } from 'react';

 const ReservationForm = ({ onReservationSubmit }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Валидация на данните и изпращане към родителския компонент
    onReservationSubmit({ name, date, time });
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <label>
        Име:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Дата:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Час:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <button type="submit">Резервирай</button>
    </form>
  );
};

export default ReservationForm;
