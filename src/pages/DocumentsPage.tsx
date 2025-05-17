import React from 'react';
import { useTranslation } from 'react-i18next';

const DocumentsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('documents.title')}</h1>
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="search"
            placeholder={t('documents.searchDocuments')}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">{t('documents.categories')}</option>
          </select>
          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">{t('documents.types')}</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Document cards will be populated here */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Sample Document</h3>
            <p className="text-primary-600 mb-4">
              This is a placeholder for document content. Real documents will be displayed here.
            </p>
            <div className="flex justify-between">
              <button className="text-accent-500 hover:text-accent-600">
                {t('documents.viewDocument')}
              </button>
              <button className="text-accent-500 hover:text-accent-600">
                {t('documents.downloadDocument')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsPage;