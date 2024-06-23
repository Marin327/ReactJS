import React from 'react';
import '../App.css'; // Добави стиловете на Contact

const Contact = () => {
  return ( 
    <div className = "contact-container" >
    <h2> Свържете се с нас: </h2> 
    <h3> За всички запитвания, предложения или нужда от помощ. </h3> 
    <p>Имейл:<a href = "mailto:info@hotelparadise.com"> info @hotelparadise.com </a><br />
    Телефон: 555555555555<br />
    Адрес: ул.Главна 123, село Баня 
    </p> 
    <div className = "social-links">
    <a href = "https://www.facebook.com/hotelparadise"
    target = "_blank"
    rel = "noopener noreferrer">Facebook</a> 
    <a href = "https://www.instagram.com/hotelparadise"
    target = "_blank"
    rel = "noopener noreferrer">Instagram</a> 
    <a href = "https://twitter.com/hotelparadise"
    target = "_blank"
    rel = "noopener noreferrer">Twitter</a>
    </div> 
   </div>
  );
}

export default Contact;
