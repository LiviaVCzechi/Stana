import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('site.title')}</h3>
            <p className="text-sm text-primary-100">{t('site.description')}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav.about')}</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/team" className="text-sm hover:text-accent-300">{t('nav.team')}</Link>
              <Link to="/sources" className="text-sm hover:text-accent-300">{t('nav.sources')}</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.fundedBy')}</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/privacy" className="text-sm hover:text-accent-300">{t('footer.privacyPolicy')}</Link>
              <Link to="/terms" className="text-sm hover:text-accent-300">{t('footer.termsOfUse')}</Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-400 text-center">
          <p className="text-sm">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;