// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Свържете се с нас: </h2>
        Тел: +359 897 082 919
        Имейл: marin_93@abv.bg
      <p>
        За допълнителна информация и въпроси, моля не се колебайте да се свържете с нас.
      </p>
      <form>
        <label>
          Име:
          <input type="text" />
        </label>
        <label>
          Имейл:
          <input type="email" />
        </label>
        <label>
          Съобщение:
          <textarea></textarea>
        </label>
        <button type="submit">Изпрати</button>
      </form>
    </div>
  );
};

export default Contact;
