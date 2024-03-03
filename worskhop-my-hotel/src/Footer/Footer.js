import React from 'react';
import '../App.css';

const Footer = () => {
  const handleSocialLinkClick = (platform) => {
    // Тук можете да добавите логика, която да се изпълни при кликване
    console.log(`Clicked on ${platform} link`);
  };

  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Свържете се с нас: info@hotelparadise.com</p>
        <p>ул. Главна 123, село Баня</p>
      </div>
      <div className="social-links">
        <a
          href="https://facebook.com/example"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleSocialLinkClick('Facebook')}
        >
          Facebook
        </a>
        <a
          href="https://twitter.com/example"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleSocialLinkClick('Twitter')}
        >
          Twitter
        </a>
        <a
          href="https://instagram.com/example"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleSocialLinkClick('Instagram')}
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}

export default Footer;