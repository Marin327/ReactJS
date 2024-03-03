import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import '../App.css';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkInDate: '',
    checkOutDate: '',
    roomType: '',
    specialRequests: '',
  });

  const formAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Имплементирайте логика за обработка на формата
    console.log('Формата е изпратена:', formData);
    // Нулиране на данните на формата след изпращане
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkInDate: '',
      checkOutDate: '',
      roomType: '',
      specialRequests: '',
    });
  };

  return (
    <animated.div style={formAnimation} className="reservation-form">
      <h2>Направете Резервация</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Име:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Имейл:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Телефон:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Дата на настаняване:</label>
          <input type="date" name="checkInDate" value={formData.checkInDate} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Дата на напускане:</label>
          <input type="date" name="checkOutDate" value={formData.checkOutDate} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Тип стая:</label>
          <select name="roomType" value={formData.roomType} onChange={handleChange} required>
            <option value="">Изберете тип стая</option>
            <option value="single">Единична стая</option>
            <option value="double">Двойна стая</option>
            <option value="suite">Суит</option>
          </select>
        </div>
        <div className="form-group">
          <label>Специални Заявки:</label>
          <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Запази</button>
      </form>
    </animated.div>
  );
}

export default ReservationForm;