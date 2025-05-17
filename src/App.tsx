import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TimelinePage from './pages/TimelinePage';
import ExhibitionsPage from './pages/ExhibitionsPage';
import DocumentsPage from './pages/DocumentsPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="timeline" element={<TimelinePage />} />
        <Route path="exhibitions" element={<ExhibitionsPage />} />
        <Route path="documents" element={<DocumentsPage />} />
      </Route>
    </Routes>
  );
};

export default App;