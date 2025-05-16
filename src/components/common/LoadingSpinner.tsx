import React from 'react';
import { useTranslation } from 'react-i18next';

export const LoadingSpinner: React.FC<{ message?: string }> = ({ message }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-900 border-r-transparent"></div>
      <p className="mt-4 text-gray-600">
        {message || t('loading.default', 'Loading...')}
      </p>
    </div>
  );
};