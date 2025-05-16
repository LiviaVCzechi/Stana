import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';

// Import layouts
import Layout from './layouts/Layout';
import { ErrorBoundary } from './components/common/ErrorBoundary';

// Import pages
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

function App() {
  const { t } = useTranslation();

  // Update document title
  React.useEffect(() => {
    document.title = t('site.title');
    
    // Update default title attribute in the DOM
    const titleElement = document.querySelector('[data-default]');
    if (titleElement) {
      titleElement.textContent = t('site.title');
    }
  }, [t]);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
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
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;