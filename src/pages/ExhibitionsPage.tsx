import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ExhibitionCard from '../components/exhibitions/ExhibitionCard';

// Sample exhibition data - in a real app, this would come from an API or database
const exhibitionsData = [
  {
    id: 1,
    title: 'The Rise of Totalitarianism',
    description: 'Explore how totalitarian regimes emerged in the 20th century and the impact they had on individuals and societies.',
    imageUrl: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '2025-01-15',
    category: 'Political History'
  },
  {
    id: 2,
    title: 'Lives in the Shadows: Everyday Survival Under Repression',
    description: 'This exhibition documents how ordinary people adapted their daily lives to survive under systems of political control and surveillance.',
    imageUrl: 'https://images.pexels.com/photos/7658344/pexels-photo-7658344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '2025-02-18',
    category: 'Social History'
  },
  {
    id: 3,
    title: 'Art as Resistance',
    description: 'Discover how artists, writers, and musicians found ways to express truth and maintain cultural identity despite censorship and persecution.',
    imageUrl: 'https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '2024-11-05',
    category: 'Cultural History'
  },
  {
    id: 4,
    title: 'Women Under Totalitarianism',
    description: 'An exploration of women\'s experiences of repression and their roles in both maintaining and resisting totalitarian systems.',
    imageUrl: 'https://images.pexels.com/photos/8851096/pexels-photo-8851096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '2024-09-22',
    category: 'Gender Studies'
  },
  {
    id: 5,
    title: 'Religious Persecution and Faith',
    description: 'How religious communities were targeted by atheist regimes and how faith persisted despite systematic attempts to eliminate it.',
    imageUrl: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '2024-12-10',
    category: 'Religious History'
  },
  {
    id: 6,
    title: 'Children of the System',
    description: 'The experiences of children growing up under totalitarian education systems and the impact on their development and worldview.',
    imageUrl: 'https://images.pexels.com/photos/8422403/pexels-photo-8422403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '2025-03-05',
    category: 'Education History'
  }
];

// Extract unique categories
const categories = Array.from(new Set(exhibitionsData.map(ex => ex.category)));

const ExhibitionsPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredExhibitions = selectedCategory
    ? exhibitionsData.filter(ex => ex.category === selectedCategory)
    : exhibitionsData;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('exhibitions.title')}</h1>
        <p className="text-xl text-gray-600">
          Explore our digital exhibitions featuring historical artifacts, documents, and personal testimonies.
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('exhibitions.categoriesTitle')}</h2>
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedCategory === null
                ? 'bg-blue-900 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            {t('exhibitions.allExhibitions')}
          </button>
          
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {filteredExhibitions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExhibitions.map(exhibition => (
            <ExhibitionCard
              key={exhibition.id}
              id={exhibition.id}
              title={exhibition.title}
              description={exhibition.description}
              imageUrl={exhibition.imageUrl}
              date={exhibition.date}
              category={exhibition.category}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">{t('exhibitions.noExhibitions')}</p>
        </div>
      )}
    </div>
  );
};

export default ExhibitionsPage;