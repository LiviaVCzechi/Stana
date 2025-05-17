import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, Search, X } from 'lucide-react';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'cs' : 'en');
  };

  return (
    <header className="bg-primary-500 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            {t('site.title')}
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex space-x-4">
              <Link to="/about" className="hover:text-accent-300">{t('nav.about')}</Link>
              <Link to="/timeline" className="hover:text-accent-300">{t('nav.timeline')}</Link>
              <Link to="/documents" className="hover:text-accent-300">{t('nav.documents')}</Link>
              <Link to="/news" className="hover:text-accent-300">{t('nav.news')}</Link>
            </nav>

            <form onSubmit={handleSearch} className="flex">
              <input
                type="search"
                placeholder={t('header.searchPlaceholder')}
                className="px-3 py-1 rounded-l text-primary-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="bg-accent-500 px-4 py-1 rounded-r hover:bg-accent-600">
                <Search size={20} />
              </button>
            </form>

            <button
              onClick={toggleLanguage}
              className="px-3 py-1 border rounded hover:bg-primary-400"
            >
              {i18n.language === 'en' ? 'CS' : 'EN'}
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="hover:text-accent-300">{t('nav.about')}</Link>
              <Link to="/timeline" className="hover:text-accent-300">{t('nav.timeline')}</Link>
              <Link to="/documents" className="hover:text-accent-300">{t('nav.documents')}</Link>
              <Link to="/news" className="hover:text-accent-300">{t('nav.news')}</Link>
            </nav>

            <form onSubmit={handleSearch} className="mt-4 flex">
              <input
                type="search"
                placeholder={t('header.searchPlaceholder')}
                className="flex-grow px-3 py-1 rounded-l text-primary-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="bg-accent-500 px-4 py-1 rounded-r hover:bg-accent-600">
                <Search size={20} />
              </button>
            </form>

            <button
              onClick={toggleLanguage}
              className="mt-4 w-full px-3 py-1 border rounded hover:bg-primary-400"
            >
              {i18n.language === 'en' ? 'CS' : 'EN'}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;