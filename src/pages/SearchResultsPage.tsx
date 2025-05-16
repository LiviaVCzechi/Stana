import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Search, Calendar, Tag } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'exhibition' | 'document' | 'timeline' | 'news';
  date: string;
  url: string;
}

const SearchResultsPage: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Extract search query from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q');
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    }
  }, [location.search]);

  // Simulate a search (in a real app, this would call a backend API)
  const performSearch = (query: string) => {
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Mock search results
      const results: SearchResult[] = [
        {
          id: 'ex1',
          title: 'The Rise of Totalitarianism',
          description: 'Explore how totalitarian regimes emerged in the 20th century and the impact they had on individuals and societies.',
          type: 'exhibition',
          date: '2025-01-15',
          url: '/exhibitions/1'
        },
        {
          id: 'doc1',
          title: 'Report on Political Trials 1950-1954',
          description: 'Official summary report of major political trials conducted during the early 1950s.',
          type: 'document',
          date: '1954-06-15',
          url: '/documents/1'
        },
        {
          id: 'timeline2',
          title: '1948: Communist Takeover',
          description: 'Communist coup in Czechoslovakia leading to political persecutions.',
          type: 'timeline',
          date: '1948-02-25',
          url: '/timeline#1948'
        },
        {
          id: 'news2',
          title: 'New Exhibition: Voices of Survivors',
          description: 'Discover our latest exhibition featuring testimonies from survivors of political repression.',
          type: 'news',
          date: '2025-03-15',
          url: '/news/1'
        }
      ];
      
      setSearchResults(results);
      setIsLoading(false);
    }, 500);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch(searchQuery);
      // Update URL without page reload
      const searchParams = new URLSearchParams(location.search);
      searchParams.set('q', searchQuery);
      window.history.replaceState(null, '', `${location.pathname}?${searchParams.toString()}`);
    }
  };

  const filterResultsByCategory = (results: SearchResult[]) => {
    if (!selectedCategory || selectedCategory === 'all') {
      return results;
    }
    return results.filter(result => result.type === selectedCategory);
  };

  const getResultTypeLabel = (type: string) => {
    switch (type) {
      case 'exhibition':
        return t('search.categories.exhibitions');
      case 'document':
        return t('search.categories.documents');
      case 'timeline':
        return t('search.categories.timeline');
      case 'news':
        return t('search.categories.news');
      default:
        return type;
    }
  };

  const getResultIcon = (type: string) => {
    switch (type) {
      case 'exhibition':
        return <Tag className="h-5 w-5" />;
      default:
        return <Calendar className="h-5 w-5" />;
    }
  };

  const filteredResults = filterResultsByCategory(searchResults);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('search.title')}</h1>
        
        <form onSubmit={handleSearchSubmit} className="relative mb-8">
          <input
            type="text"
            placeholder={t('header.searchPlaceholder')}
            className="pl-10 pr-4 py-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
          <button
            type="submit"
            className="absolute right-2 top-2 bg-blue-900 text-white px-4 py-1 rounded-md hover:bg-blue-800"
          >
            {t('header.searchButton')}
          </button>
        </form>
        
        {searchQuery && (
          <div className="mb-6">
            <p className="text-lg text-gray-700">
              {t('search.resultsFor')}: <span className="font-semibold">"{searchQuery}"</span>
            </p>
          </div>
        )}
        
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === null || selectedCategory === 'all'
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedCategory('all')}
            >
              {t('search.categories.all')}
            </button>
            
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === 'exhibition'
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedCategory('exhibition')}
            >
              {t('search.categories.exhibitions')}
            </button>
            
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === 'document'
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedCategory('document')}
            >
              {t('search.categories.documents')}
            </button>
            
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === 'timeline'
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedCategory('timeline')}
            >
              {t('search.categories.timeline')}
            </button>
            
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === 'news'
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedCategory('news')}
            >
              {t('search.categories.news')}
            </button>
          </div>
        </div>
        
        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-900 border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Searching...</p>
          </div>
        ) : (
          <div>
            {filteredResults.length > 0 ? (
              <div className="space-y-6">
                {filteredResults.map(result => (
                  <div key={result.id} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center mb-2">
                      {getResultIcon(result.type)}
                      <span className="ml-2 text-sm text-blue-600 font-medium">
                        {getResultTypeLabel(result.type)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      <a 
                        href={result.url} 
                        className="hover:text-blue-900 hover:underline"
                      >
                        {result.title}
                      </a>
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <time dateTime={result.date}>
                        {new Date(result.date).toLocaleDateString()}
                      </time>
                    </div>
                    <p className="text-gray-600">{result.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              searchQuery && (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600">{t('search.noResults')}</p>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;