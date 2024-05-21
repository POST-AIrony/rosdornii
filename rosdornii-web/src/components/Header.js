// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for styling
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
          <img src={logo} alt="Logo" className='logo'/>
        </div>
        <nav className="header-nav">
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/import">Импорт данных</Link></li>
            <li><Link to="/view">Просмотр данных</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
