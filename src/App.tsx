import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TimelinePage from './pages/TimelinePage';
import HistoryPage from './pages/HistoryPage';
import ExhibitionsPage from './pages/ExhibitionsPage';
import DocumentsPage from './pages/DocumentsPage';
import ConferencesPage from './pages/ConferencesPage';
import NewsPage from './pages/NewsPage';
import TeamPage from './pages/TeamPage';
import SourcesPage from './pages/SourcesPage';
import SearchResultsPage from './pages/SearchResultsPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="timeline" element={<TimelinePage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="exhibitions" element={<ExhibitionsPage />} />
        <Route path="documents" element={<DocumentsPage />} />
        <Route path="conferences" element={<ConferencesPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="sources" element={<SourcesPage />} />
        <Route path="search" element={<SearchResultsPage />} />
      </Route>
    </Routes>
  );
};

export default App;