import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const NewsPreview: React.FC = () => {
  const { t } = useTranslation();
  
  // Sample news data
  const newsItems = [
    {
      id: 1,
      title: 'New Exhibition: Voices of Survivors',
      date: '2025-03-15',
      excerpt: 'Discover our latest exhibition featuring testimonies from survivors of political repression.'
    },
    {
      id: 2,
      title: 'International Conference Announcement',
      date: '2025-02-28',
      excerpt: 'Join us for an international conference on the documentation of historical repressions.'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">{t('home.latestNews')}</h2>
      <div className="space-y-4">
        {newsItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <Calendar className="h-4 w-4 mr-1" />
              <time dateTime={item.date}>
                {new Date(item.date).toLocaleDateString()}
              </time>
            </div>
            <p className="text-gray-600 mb-4">{item.excerpt}</p>
            <Link 
              to={`/news/${item.id}`} 
              className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700"
            >
              {t('news.readMore')}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link 
          to="/news" 
          className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700"
        >
          View all news
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default NewsPreview;