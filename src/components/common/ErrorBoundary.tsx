import React from 'react';
import { useTranslation } from 'react-i18next';
import { AlertTriangle } from 'lucide-react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

interface FallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center justify-center mb-6">
          <AlertTriangle className="h-12 w-12 text-red-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
          {t('error.title', 'Something went wrong')}
        </h2>
        <p className="text-gray-600 text-center mb-6">
          {t('error.message', 'We apologize for the inconvenience. Please try again later.')}
        </p>
        <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded mb-6">
          <p className="font-mono">{error.message}</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={resetErrorBoundary}
            className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors duration-200"
          >
            {t('error.tryAgain', 'Try Again')}
          </button>
        </div>
      </div>
    </div>
  );
};

export const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
};