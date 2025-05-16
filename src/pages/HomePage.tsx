import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../components/home/HeroSection';
import FeaturedExhibition from '../components/home/FeaturedExhibition';
import NewsPreview from '../components/home/NewsPreview';
import TimelineSlider from '../components/timeline/TimelineSlider';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('home.featuredExhibition')}</h2>
            <FeaturedExhibition />
          </div>
          <div className="lg:col-span-1">
            <NewsPreview />
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 py-12">
        <TimelineSlider />
      </div>
    </div>
  );
};

export default HomePage;