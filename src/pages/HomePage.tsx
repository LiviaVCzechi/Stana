import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('home.welcomeHeading')}
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('home.welcomeText')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/timeline"
              className="bg-accent-500 text-white px-6 py-3 rounded-lg hover:bg-accent-600 flex items-center"
            >
              {t('home.exploreTimeline')}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t('home.featuredPriest')}
          </h2>
          {/* Featured story content will be added here */}
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t('home.latestNews')}
          </h2>
          {/* News items will be added here */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;