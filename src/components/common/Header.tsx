import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Search, Globe, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLanguageMenuOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const menuItems = [
    { path: '/about', label: t('nav.about') },
    { path: '/timeline', label: t('nav.timeline') },
    { path: '/history', label: t('nav.history') },
    { path: '/exhibitions', label: t('nav.exhibitions') },
    { path: '/documents', label: t('nav.documents') },
    { path: '/conferences', label: t('nav.conferences') },
    { path: '/news', label: t('nav.news') },
    { path: '/team', label: t('nav.team') },
    { path: '/sources', label: t('nav.sources') }
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto">
        {/* Top bar with logo and title */}
        <div className="px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-900" />
              <span className="ml-2 text-2xl font-semibold text-blue-900">
                {t('site.title')}
              </span>
            </Link>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                className="text-gray-700 hover:text-blue-900"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation bar */}
        <div className="px-4 sm:px-6 lg:px-8 py-2 hidden md:block">
          <div className="flex justify-between items-center">
            <nav className="flex space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-700 hover:text-blue-900 px-2 py-1 text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  placeholder={t('header.searchPlaceholder')}
                  className="pl-10 pr-3 py-2 w-48 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
              </form>

              <div className="relative">
                <button
                  className="flex items-center text-gray-700 hover:text-blue-900"
                  onClick={toggleLanguageMenu}
                >
                  <Globe className="h-5 w-5" />
                  <span className="ml-1 text-sm">{i18n.language === 'cs' ? 'CS' : 'EN'}</span>
                </button>

                {isLanguageMenuOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
                    <button
                      className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === 'en' ? 'bg-blue-50 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}
                      onClick={() => changeLanguage('en')}
                    >
                      English
                    </button>
                    <button
                      className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === 'cs' ? 'bg-blue-50 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}
                      onClick={() => changeLanguage('cs')}
                    >
                      Česky
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-inner">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="px-5 pt-4 pb-5">
              <form onSubmit={handleSearchSubmit} className="relative mb-4">
                <input
                  type="text"
                  placeholder={t('header.searchPlaceholder')}
                  className="pl-10 pr-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
              </form>

              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <span className="text-sm font-medium text-gray-500">
                  {t('header.languageSelector')}:
                </span>
                <div className="flex space-x-4">
                  <button
                    className={`px-3 py-1 rounded-md text-sm font-medium ${
                      i18n.language === 'en'
                        ? 'bg-blue-100 text-blue-900'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => changeLanguage('en')}
                  >
                    EN
                  </button>
                  <button
                    className={`px-3 py-1 rounded-md text-sm font-medium ${
                      i18n.language === 'cs'
                        ? 'bg-blue-100 text-blue-900'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => changeLanguage('cs')}
                  >
                    CS
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;