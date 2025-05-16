import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and project info */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-semibold">
                {t('site.title')}
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              {t('site.description')}
            </p>
            <div className="mt-6">
              <p className="text-sm font-medium text-white">{t('footer.fundedBy')}:</p>
              <p className="mt-1 text-sm text-gray-300">[Funding Body]</p>
            </div>
          </div>

          {/* Navigation links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-white">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/timeline" className="text-sm text-gray-300 hover:text-white">
                  {t('nav.timeline')}
                </Link>
              </li>
              <li>
                <Link to="/exhibitions" className="text-sm text-gray-300 hover:text-white">
                  {t('nav.exhibitions')}
                </Link>
              </li>
              <li>
                <Link to="/documents" className="text-sm text-gray-300 hover:text-white">
                  {t('nav.documents')}
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-sm text-gray-300 hover:text-white">
                  {t('nav.news')}
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-gray-300 hover:text-white">
                  {t('nav.team')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-gray-300 hover:text-white">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-300 hover:text-white">
                  {t('footer.termsOfUse')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-800">
          <p className="text-sm text-gray-300">
            {t('footer.copyright').replace('2025', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;