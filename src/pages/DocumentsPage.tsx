import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';
import DocumentCard from '../components/documents/DocumentCard';

// Sample document data - in a real app, this would come from an API or database
const documentsData = [
  {
    id: 1,
    title: 'Report on Political Trials 1950-1954',
    description: 'Official summary report of major political trials conducted during the early 1950s.',
    date: '1954-06-15',
    type: 'Report',
    fileUrl: '#',
    previewUrl: '#'
  },
  {
    id: 2,
    title: 'Photograph Collection: Labor Camps',
    description: 'Collection of photographs documenting conditions in forced labor camps.',
    date: '1955-03-22',
    type: 'Photographs',
    previewUrl: '#'
  },
  {
    id: 3,
    title: 'Testimony of Anna Kovářová',
    description: 'Personal testimony of a political prisoner detailing her experiences of interrogation and imprisonment.',
    date: '1992-11-08',
    type: 'Testimony',
    fileUrl: '#',
    previewUrl: '#'
  },
  {
    id: 4,
    title: 'Secret Police Manual on Surveillance',
    description: 'Internal training manual used by the secret police detailing methods of civilian surveillance.',
    date: '1960-01-10',
    type: 'Manual',
    fileUrl: '#'
  },
  {
    id: 5,
    title: 'Censorship Guidelines for Publishers',
    description: 'Official document outlining prohibited topics and censorship procedures for publishing houses.',
    date: '1972-09-05',
    type: 'Official Document',
    fileUrl: '#',
    previewUrl: '#'
  },
  {
    id: 6,
    title: 'Letters from Prison: Correspondence Collection',
    description: 'Collection of letters written by political prisoners to their families, showing censorship marks.',
    date: '1950-1965',
    type: 'Correspondence',
    previewUrl: '#'
  }
];

// Extract unique document types
const documentTypes = Array.from(new Set(documentsData.map(doc => doc.type)));

const DocumentsPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredDocuments = documentsData.filter(doc => {
    // First filter by type if selected
    if (selectedType && doc.type !== selectedType) {
      return false;
    }
    
    // Then filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        doc.title.toLowerCase().includes(query) ||
        doc.description.toLowerCase().includes(query) ||
        doc.type.toLowerCase().includes(query)
      );
    }
    
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('documents.title')}</h1>
        <p className="text-xl text-gray-600">
          Browse our collection of historical documents, photographs, testimonies, and official records.
        </p>
      </div>
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="md:flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder={t('documents.searchDocuments')}
                className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
            </div>
          </div>
          
          <div>
            <select
              className="w-full md:w-auto px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedType || ''}
              onChange={(e) => setSelectedType(e.target.value || null)}
            >
              <option value="">{t('documents.types')}</option>
              {documentTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        {filteredDocuments.map(document => (
          <DocumentCard
            key={document.id}
            id={document.id}
            title={document.title}
            description={document.description}
            date={document.date}
            type={document.type}
            fileUrl={document.fileUrl}
            previewUrl={document.previewUrl}
          />
        ))}
        
        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No documents found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentsPage;