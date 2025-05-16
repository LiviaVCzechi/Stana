import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedExhibition: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img 
            className="h-48 w-full object-cover md:h-full md:w-48" 
            src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Featured exhibition" 
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">The Rise of Totalitarianism</h3>
          <p className="text-gray-600 mb-4">
            Explore how totalitarian regimes emerged in the 20th century and the impact they had on individuals and societies.
          </p>
          <Link 
            to="/exhibitions/totalitarianism" 
            className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700"
          >
            View Exhibition
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedExhibition;