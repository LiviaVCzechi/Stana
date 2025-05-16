import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, User, Tag } from 'lucide-react';

interface NewsArticle {
  id: number;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl?: string;
}

const NewsPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Sample news data
  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: 'New Exhibition: Voices of Survivors',
      date: '2025-03-15',
      author: 'Martina Novotná',
      excerpt: 'Discover our latest exhibition featuring testimonies from survivors of political repression.',
      content: 'We are pleased to announce the opening of our newest digital exhibition, "Voices of Survivors," which brings together oral history testimonies, photographs, and personal artifacts from those who experienced political repression firsthand. This exhibition represents over two years of research and collaboration with survivor organizations across Central and Eastern Europe.',
      category: 'Exhibitions',
      imageUrl: 'https://images.pexels.com/photos/8851521/pexels-photo-8851521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: 'International Conference Announcement',
      date: '2025-02-28',
      author: 'Jan Svoboda',
      excerpt: 'Join us for an international conference on the documentation of historical repressions.',
      content: 'The Virtual Museum of Repressions, in collaboration with Charles University in Prague and the Institute for the Study of Totalitarian Regimes, will host an international conference titled "Documenting the Undocumentable: Methodological Challenges in Recording Histories of Repression." The conference will take place from September 15-17, 2025, in Prague, with options for virtual attendance.',
      category: 'Events',
      imageUrl: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: 'New Archival Partnership Announced',
      date: '2025-01-20',
      author: 'Helena Dvořáková',
      excerpt: 'Our museum has established a new partnership with the National Archives to digitize important historical documents.',
      content: 'We are thrilled to announce a new collaborative partnership with the National Archives that will significantly expand our digital document collection. Over the next two years, we will be working together to digitize over 10,000 pages of previously inaccessible materials related to political trials, prison records, and surveillance files from the 1950s through the 1980s.',
      category: 'Partnerships',
      imageUrl: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      title: 'Educational Resources for Secondary Schools Released',
      date: '2024-12-05',
      author: 'Tomáš Černý',
      excerpt: 'New teaching materials help students understand the complex history of political repressions.',
      content: 'Today we launch a comprehensive set of educational resources designed specifically for secondary school teachers. These materials include lesson plans, primary source excerpts, discussion questions, and interactive activities that help students engage with the difficult history of political repressions in an age-appropriate way.',
      category: 'Education',
      imageUrl: 'https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];
  
  // Extract unique categories
  const categories = Array.from(new Set(newsArticles.map(article => article.category)));
  
  const filteredArticles = selectedCategory
    ? newsArticles.filter(article => article.category === selectedCategory)
    : newsArticles;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('news.title')}</h1>
        <p className="text-xl text-gray-600">
          Stay updated with the latest news, announcements, and developments from our museum.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3/4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('news.recentArticles')}</h2>
          
          <div className="space-y-8">
            {filteredArticles.map(article => (
              <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {article.imageUrl && (
                  <div className="relative h-48 md:h-64">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Tag className="h-4 w-4 text-blue-500 mr-2" />
                    <span className="text-sm text-blue-500 font-medium">{article.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                  
                  <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <time dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString()}
                      </time>
                    </div>
                    
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{article.content}</p>
                  
                  <a
                    href={`/news/${article.id}`}
                    className="inline-block text-blue-900 font-medium hover:text-blue-700 hover:underline"
                  >
                    {t('news.readMore')}
                  </a>
                </div>
              </article>
            ))}
            
            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No articles found in this category.</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('news.categories')}</h3>
            
            <ul className="space-y-2">
              <li>
                <button
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    selectedCategory === null
                      ? 'bg-blue-100 text-blue-900'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedCategory(null)}
                >
                  All Categories
                </button>
              </li>
              
              {categories.map(category => (
                <li key={category}>
                  <button
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                      selectedCategory === category
                        ? 'bg-blue-100 text-blue-900'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;