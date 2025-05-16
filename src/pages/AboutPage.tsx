import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('about.title')}</h1>
        
        <div className="prose prose-blue max-w-none">
          <h2>{t('about.mission')}</h2>
          <p>
            The Virtual Museum of Repressions aims to document, preserve, and present the history of political, social, and cultural repressions in the 20th century. Our mission is to create an accessible and comprehensive digital platform that educates the public about the impact of totalitarian regimes and systems of oppression.
          </p>
          
          <h2>{t('about.vision')}</h2>
          <p>
            We envision a world where the lessons of history help prevent future repressions and human rights violations. By providing access to historical materials, personal testimonies, and scholarly analysis, we seek to foster critical thinking and deeper understanding of complex historical events.
          </p>
          
          <h2>{t('about.goals')}</h2>
          <ul>
            <li>To create an accessible digital archive of documents, photographs, and testimonies related to various forms of repression</li>
            <li>To develop engaging educational materials for students, researchers, and the general public</li>
            <li>To collaborate with international institutions and experts to ensure comprehensive and accurate historical representation</li>
            <li>To use innovative digital tools to present complex historical narratives in an engaging and intuitive manner</li>
            <li>To preserve the memory of victims and survivors of repression</li>
          </ul>
          
          <h2>{t('about.significance')}</h2>
          <p>
            The Virtual Museum of Repressions fills a critical gap in how we preserve and present difficult aspects of our shared history. By creating a digital space that transcends physical boundaries, we enable broader access to historical knowledge that might otherwise be inaccessible to many people. Our project is significant because it:
          </p>
          <ul>
            <li>Provides a platform for voices that have been historically marginalized or silenced</li>
            <li>Connects contemporary audiences with historical events through innovative digital storytelling</li>
            <li>Creates opportunities for cross-cultural dialogue about shared historical experiences</li>
            <li>Serves as a warning about the dangers of totalitarian systems and the fragility of democratic institutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;