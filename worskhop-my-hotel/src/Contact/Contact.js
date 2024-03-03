import React from 'react';
import '.././/App.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Свържете се с нас</h2>
      <p>
        За всички въпроси, предложения или нужда от помощ, не се колебайте да се свържете с нас. Нашият екип е тук, за да ви помогне.
      </p>
      <p>
        Имейл: <a href="mailto:info@hotelparadise.com">info@hotelparadise.com</a><br />
        Телефон: +359 89 708 2919<br />
        Адрес: ул. Главна 123, село Баня
      </p>
      {/* Включете контактната форма и друга информация, ако е необходимо */}
    </div>
  );
}

export default Contact;