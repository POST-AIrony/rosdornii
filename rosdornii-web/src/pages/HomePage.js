// src/pages/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file for styling
import img1 from '../assets/img1.png';


const HomePage = () => {
    const navigate = useNavigate();
    const handleImportClick = () => {
        navigate('/import');
    };

    const HandleViewClick = () => {
        navigate('/view');
    };
  return (
    <main className="home-page">
        
      <section className="welcome-section">
      <img src={img1} alt="img1" className="intro-image" algin="left"/>
        <h2>Добро пожаловать на веб-сервис по работе с отраслевыми классификаторами строительной информации (ОКСИ и ФСНБ)!</h2>
        <p>
          Проект представляет собой инструмент для работы с отраслевыми классификаторами строительной информации. Он объединяет данные из различных источников, предоставляя пользователям интуитивно понятный интерфейс для анализа и управления информацией, связанной с ОКСИ и ФСНБ.
        </p>
        <p>
          Так же у нас доступен чат-бот в Telegram: Интеграция с популярным мессенджером, чат-бот который может отвечать на запросы пользователей на естественном языке, предоставляя информацию быстро и удобно.
        </p>
        <p>
          Веб-сервис станет незаменимым помощником для всех, кто работает с отраслевыми классификаторами строительной информации, обеспечивая надежный доступ к данным и эффективные инструменты для их анализа.
        </p>
        <div className="buttons">
          <button className="import-button" onClick={handleImportClick}>Импорт данных</button>
          <button className="view-button" onClick={HandleViewClick}>Просмотр данных</button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
