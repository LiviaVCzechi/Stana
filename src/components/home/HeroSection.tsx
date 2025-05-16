import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Clock, Image, FileText } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-blue-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {t('home.welcomeHeading')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            {t('home.welcomeText')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/timeline" 
              className="flex items-center bg-white text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors duration-200"
            >
              <Clock className="mr-2 h-5 w-5" />
              {t('home.exploreTimeline')}
            </Link>
            <Link 
              to="/exhibitions" 
              className="flex items-center bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors duration-200"
            >
              <Image className="mr-2 h-5 w-5" />
              {t('home.viewExhibitions')}
            </Link>
            <Link 
              to="/documents" 
              className="flex items-center bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors duration-200"
            >
              <FileText className="mr-2 h-5 w-5" />
              {t('home.browseDocuments')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;