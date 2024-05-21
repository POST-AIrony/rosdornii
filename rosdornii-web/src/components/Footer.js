// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2015-2024 ФАУ «Российский дорожный научно-исследовательский институт»</p>
        <p>Все средства связи защищены ГОСТ Р 52879 в рамках ИТ проекта «Цифровая Эра Транспорта 2024»</p>
        <p>Сделано командой "POST ИИрония, Воронежский государственный университет инженерных технологий"</p>
      </div>
    </footer>
  );
};

export default Footer;
