// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ImportDataPage from './pages/ImportDataPage';
import ViewDataPage from './pages/ViewDataPage'; // Import the new page

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/import" element={<ImportDataPage />} />
        <Route path="/view" element={<ViewDataPage />} /> {/* Add route for ViewDataPage */}
        {/* Add more routes here as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
