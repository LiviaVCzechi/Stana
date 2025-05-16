import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Book, Users, FileText } from 'lucide-react';

interface Reference {
  id: number;
  title: string;
  author: string;
  year: number;
  publisher?: string;
  url?: string;
  type: 'book' | 'article' | 'website' | 'document';
}

const SourcesPage: React.FC = () => {
  const { t } = useTranslation();
  
  // Sample bibliography data
  const references: Reference[] = [
    {
      id: 1,
      title: 'The Black Book of Communism: Crimes, Terror, Repression',
      author: 'Courtois, S. et al.',
      year: 1999,
      publisher: 'Harvard University Press',
      type: 'book'
    },
    {
      id: 2,
      title: 'Iron Curtain: The Crushing of Eastern Europe 1944-1956',
      author: 'Applebaum, A.',
      year: 2012,
      publisher: 'Penguin Books',
      type: 'book'
    },
    {
      id: 3,
      title: 'The History of the Gulag: From Collectivization to the Great Terror',
      author: 'Khlevniuk, O.',
      year: 2004,
      publisher: 'Yale University Press',
      type: 'book'
    },
    {
      id: 4,
      title: 'Digital Memorialization: Collective Memory of Political Repressions in Online Environments',
      author: 'Dvořáková, M.',
      year: 2022,
      publisher: 'Journal of Digital History',
      type: 'article'
    },
    {
      id: 5,
      title: 'Oral History in Central and Eastern Europe: Current Research and Future Directions',
      author: 'Zemanova, L. & Novák, J.',
      year: 2020,
      publisher: 'Memory Studies Journal',
      type: 'article'
    },
    {
      id: 6,
      title: 'Institute for the Study of Totalitarian Regimes - Digital Archive',
      author: 'ÚSTR',
      year: 2023,
      url: 'https://www.ustrcr.cz/en/digital-archive/',
      type: 'website'
    },
    {
      id: 7,
      title: 'Memorial: International Historical, Educational, Charitable and Human Rights Society',
      author: 'Memorial Society',
      year: 2023,
      url: 'https://www.memo.ru/en-us/',
      type: 'website'
    }
  ];

  // Helper function to get icon for reference type
  const getReferenceIcon = (type: string) => {
    switch (type) {
      case 'book':
        return <Book className="h-5 w-5 text-blue-900" />;
      case 'article':
        return <FileText className="h-5 w-5 text-blue-900" />;
      case 'website':
        return <ExternalLink className="h-5 w-5 text-blue-900" />;
      case 'document':
        return <FileText className="h-5 w-5 text-blue-900" />;
      default:
        return <Book className="h-5 w-5 text-blue-900" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('sources.title')}</h1>
        <p className="text-xl text-gray-600">
          References, bibliographic sources, and further reading on the history of political repressions.
        </p>
      </div>
      
      <div className="space-y-16">
        {/* Bibliography */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('sources.bibliography')}</h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {references.map(reference => (
                <li key={reference.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      {getReferenceIcon(reference.type)}
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900">
                        {reference.title}
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        {reference.author} ({reference.year})
                        {reference.publisher && `, ${reference.publisher}`}
                      </p>
                      
                      {reference.url && (
                        <a
                          href={reference.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center text-sm text-blue-900 hover:text-blue-700"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Access Resource
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        
        {/* Partner Institutions */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('sources.partners')}</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="prose prose-blue max-w-none">
              <p>
                Our museum collaborates with numerous institutions and organizations dedicated to preserving the memory of political repressions and promoting historical understanding. These partnerships allow us to access archival materials, share expertise, and develop comprehensive educational resources.
              </p>
              
              <h3>Key Institutional Partners</h3>
              <ul>
                <li>
                  <strong>Institute for the Study of Totalitarian Regimes</strong> (Czech Republic) - 
                  A public research institution that studies and evaluates the periods of Nazi occupation and Communist rule.
                </li>
                <li>
                  <strong>National Memory Institute</strong> (Slovakia) - 
                  An organization responsible for preserving and making accessible documents from the period of oppression.
                </li>
                <li>
                  <strong>Institute of National Remembrance</strong> (Poland) - 
                  A research institute with archival, educational, and legal investigation functions.
                </li>
                <li>
                  <strong>Memorial Society</strong> (International) - 
                  An organization dedicated to historical truth and civil rights in post-Soviet states.
                </li>
                <li>
                  <strong>Charles University</strong> (Czech Republic) - 
                  Academic partner providing research expertise and educational resources.
                </li>
              </ul>
              
              <h3>Archives and Collections</h3>
              <ul>
                <li>
                  <strong>National Archives</strong> (Czech Republic) - 
                  Official repository of government records and historical documents.
                </li>
                <li>
                  <strong>Samizdat Archive</strong> - 
                  Collection of underground publications from the communist era.
                </li>
                <li>
                  <strong>Oral History Center</strong> - 
                  Repository of recorded testimonies and interview transcripts from survivors.
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Further Reading */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('sources.furtherReading')}</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="prose prose-blue max-w-none">
              <p>
                For those interested in exploring the history of political repressions further, we recommend the following resources:
              </p>
              
              <h3>Online Resources</h3>
              <ul>
                <li>
                  <a href="https://www.ustrcr.cz/en/" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-700">
                    Institute for the Study of Totalitarian Regimes
                  </a> - 
                  Digital archive and educational materials
                </li>
                <li>
                  <a href="https://www.ceeol.com/" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-700">
                    Central and Eastern European Online Library
                  </a> - 
                  Academic articles and research on regional history
                </li>
                <li>
                  <a href="https://www.memo.ru/en-us/" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-700">
                    Memorial International
                  </a> - 
                  Resources on political repressions in the Soviet Union
                </li>
              </ul>
              
              <h3>Documentary Films</h3>
              <ul>
                <li>
                  <strong>"The Lives of Others"</strong> (2006) - 
                  Feature film depicting surveillance in East Germany
                </li>
                <li>
                  <strong>"Katyn"</strong> (2007) - 
                  Andrzej Wajda's film about the Katyn massacre
                </li>
                <li>
                  <strong>"The Soviet Story"</strong> (2008) - 
                  Documentary on Soviet crimes against humanity
                </li>
                <li>
                  <strong>"Children of the Gulag"</strong> (2014) - 
                  Documentary on the experiences of children in labor camps
                </li>
              </ul>
              
              <h3>Educational Resources</h3>
              <p>
                Our museum offers specialized educational materials for teachers and students, including:
              </p>
              <ul>
                <li>Lesson plans for secondary school and university courses</li>
                <li>Primary source collections with discussion questions</li>
                <li>Interactive timelines and maps</li>
                <li>Video testimonies with teaching guides</li>
              </ul>
              <p>
                To access these materials, please visit our <a href="/education" className="text-blue-900 hover:text-blue-700">Education Resources</a> section.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SourcesPage;