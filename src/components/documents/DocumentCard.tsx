import React from 'react';
import { Calendar, FileText, Download, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface DocumentCardProps {
  id: number;
  title: string;
  description: string;
  date: string;
  type: string;
  fileUrl?: string;
  previewUrl?: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({
  id,
  title,
  description,
  date,
  type,
  fileUrl,
  previewUrl
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          <FileText className="h-10 w-10 text-blue-900" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <span className="mr-3 bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">
              {type}
            </span>
            <Calendar className="h-4 w-4 mr-1" />
            <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
          </div>
          <p className="text-gray-600 mb-4 text-sm">{description}</p>
          <div className="flex space-x-3">
            {fileUrl && (
              <a
                href={fileUrl}
                className="flex items-center text-sm text-blue-900 hover:text-blue-700"
                download
              >
                <Download className="h-4 w-4 mr-1" />
                {t('documents.downloadDocument')}
              </a>
            )}
            {previewUrl && (
              <a
                href={previewUrl}
                className="flex items-center text-sm text-blue-900 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye className="h-4 w-4 mr-1" />
                {t('documents.viewDocument')}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;