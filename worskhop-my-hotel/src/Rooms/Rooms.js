import React, { useState } from 'react';
import '../App.css';

const roomsData = [
  {
    id: 1,
    name: 'Стая Слънчеви поляни',
    images: ['images30.jpg', 'images28.jpg'],
    price: '120 лв. на нощ',
  },
  {
    id: 2,
    name: 'Стая Синя Лагуна',
    images: ['images19.jpg', 'images23.jpeg'],
    price: '150 лв. на нощ',
  },
  {
    id: 3,
    name: 'Стая Зелени планини',
    images: ['images12.jpg', 'images31.jpg'],
    price: '130 лв. на нощ',
  },
  {
    id: 4,
    name: 'Стая Оранжев оазис',
    images: ['images24.jpg', 'images33.jpg',],
    price: '140 лв. на нощ',
  },
  {
    id: 5,
    name: 'Стая Лилави сънища',
    images: ['images34.jpg', 'images35.jpg'],
    price: '160 лв. на нощ',
  },
  {
    id: 6,
    name: 'Стая Природно дърво',
    images: ['images36.jpg', 'images37.jpg'],
    price: '180 лв. на нощ',
  },
  {
    id: 7,
    name: 'Стая Магически лес',
    images: ['images39.jpg', 'images40.jpg'],
    price: '170 лв. на нощ',
  },
  {
    id: 8,
    name: 'Стая Снежно уединение',
    images: ['images41.jpg', 'images42.jpg'],
    price: '200 лв. на нощ',
  },
  {
    id: 9,
    name: 'Стая Осъден на планини',
    images: ['images45.jpg', 'images44.jpg'],
    price: '160 лв. на нощ',
  },
  {
    id: 10,
    name: 'Стая Екзотичен рай',
    images: ['images46.jpg', 'images47.jpg'],
    price: '190 лв. на нощ',
  },
  {
    id: 11,
    name: 'Стая Заслон в скалите',
    images: ['images49.jpg', 'images50.jpg'],
    price: '150 лв. на нощ',
  },
  {
    id: 12,
    name: 'Стая Лилава мечта',
    images: ['images51.jpg', 'images52.png'],
    price: '180 лв. на нощ',
  },
  {
    id: 13,
    name: 'Стая Воден рай',
    images: ['images53.jpg', 'images54.jpg'],
    price: '200 лв. на нощ',
  },
  {
    id: 14,
    name: 'Стая Ловна',
    images: ['images55.jpg', 'images56.jpg'],
    price: '190 лв. на нощ',
  },
  {
    id: 15,
    name: 'Стая Магичен връх',
    images: ['images58.jpg', 'images57.jpg'],
    price: '210 лв. на нощ',
  },
];

const Room = ({ room }) => {
  const [showGallery, setShowGallery] = useState(false);
  const [showReservationForm, setShowReservationForm] = useState(false);

  const openGallery = () => {
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  const openReservationForm = () => {
    setShowReservationForm(true);
  };

  const closeReservationForm = () => {
    setShowReservationForm(false);
  };

  return (
    <div className="room">
      <h3>{room.name}</h3>
      <img src={`/images/${room.images[0]}`} alt={room.name} onClick={openGallery} />
      <p>{room.price}</p>
      <button onClick={openReservationForm}>Резервирай</button>

      {showGallery && (
        <div className="gallery-overlay" onClick={closeGallery}>
          <div className="gallery">
            {room.images.map((image, index) => (
              <img key={index} src={`/images/${image}`} alt={`${room.name} - Image ${index + 1}`} />
            ))}
            <button onClick={closeGallery}>Затвори</button>
          </div>
        </div>
      )}

      {showReservationForm && (
        <div className="reservation-overlay" onClick={closeReservationForm}>
          <div className="reservation-form">
            <h2>Резервация за {room.name}</h2>
            {/* Добавете тук вашата форма за резервация */}
            <button onClick={closeReservationForm}>Затвори</button>
          </div>
        </div>
      )}
    </div>
  );
};

const Rooms = () => {
  return (
    <div className="rooms">
      <h2>Наши Стаи</h2>
      <p>Открийте нашите уютни и елегантни стаи, проектирани за вашето удоволствие.</p>

      <div className="rooms-container">
        {roomsData.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;