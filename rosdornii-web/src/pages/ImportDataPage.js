// src/pages/ImportDataPage.js
import React, { useState } from 'react';
import axios from 'axios';
import './ImportDataPage.css'; // Import the CSS file for styling
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
const ImportDataPage = () => {
    const [fileODS, setFileODS] = useState(null);
    const [fileXML, setFileXML] = useState(null);
  
    const handleFileChangeODS = (event) => {
      setFileODS(event.target.files[0]);
    };
  
    const handleFileChangeXML = (event) => {
      setFileXML(event.target.files[0]);
    };
  
    const handleUploadODS = async () => {
      if (fileODS) {
        const formData = new FormData();
        formData.append('file', fileODS);
  
        try {
          const response = await axios.post('http://localhost:8000/upload/upload_gsn/', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          alert('Файл загружен успешно!');
        } catch (error) {
          console.error('Ошибка загрузки файла:', error);
          alert('Не удалось загрузить файл');
        }
      }
    };
  
    const handleUploadXML = async () => {
      if (fileXML) {
        const formData = new FormData();
        formData.append('file', fileXML);
  
        try {
          const response = await axios.post('http://localhost:8000/upload/upload_fsnb/', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          alert('Файл загружен успешно!');
        } catch (error) {
          console.error('Ошибка загрузки файла:', error);
          alert('Не удалось загрузить файл');
        }
      }
    };
  return (
    <main className="import-data-page">
      <div className="breadcrumb">
        <span>Главная страница &gt; Импорт данных</span>
      </div>
      <section className="import-section">
        <img src={img2} alt="img2" className="import-image2"/>
        <div className="file-import">
          <div className="file-import-section">
            <label>ODS</label>
            <input type="file" accept=".ods" onChange={handleFileChangeODS}/>
            <button onClick={handleUploadODS}>Загрузить файл ODS</button>
          </div>
          <div className="file-import-section">
            <label>XML</label>
            <input type="file" accept=".xml" onChange={handleFileChangeXML}/>
            <button onClick={handleUploadXML}>Загрузить файл XML</button>
          </div>
        </div>
          <img src={img3} alt="img3" className="import-image1"/>
      </section>
    </main>
  );
};

export default ImportDataPage;
