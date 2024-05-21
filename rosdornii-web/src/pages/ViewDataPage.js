// src/pages/ViewDataPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewDataPage.css';

const ViewDataPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/upload/get_fsnb/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="view-data-page">
      <div className="breadcrumb">
        <span>Главная страница &gt; Просмотр данных</span>
      </div>
      <section className="data-section">
        <h2>Просмотр данных</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Код</th>
              <th>Наименование</th>
              <th>Стоимость</th>
              <th>Оптимальная стоимость</th>
              <th>Единица измерения</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.cost}</td>
                <td>{item.opt_cost}</td>
                <td>{item.measure_unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default ViewDataPage;
