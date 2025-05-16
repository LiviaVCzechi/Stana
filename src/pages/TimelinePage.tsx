import React from 'react';
import { useTranslation } from 'react-i18next';
import TimelineSlider from '../components/timeline/TimelineSlider';

const TimelinePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('timeline.title')}</h1>
        <p className="text-xl text-gray-600">
          Explore key historical events and personalities related to the history of repressions through our interactive timeline.
        </p>
      </div>
      
      <TimelineSlider />
      
      <div className="max-w-3xl mx-auto mt-16">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-blue-700">
            The timeline above highlights key events in the history of political repressions. Click on any point to learn more about specific events and their significance.
          </p>
        </div>
        
        <div className="prose prose-blue max-w-none">
          <h2>Understanding the Timeline</h2>
          <p>
            Our interactive timeline spans from 1939 to 1989, covering the most significant period of political repressions in Central and Eastern Europe. This period encompasses World War II, the rise of communist regimes, various waves of political persecution, and eventually the fall of totalitarian systems in the region.
          </p>
          
          <p>
            By exploring the timeline, you can gain insights into how these historical events unfolded chronologically and how they were interconnected. Each entry provides context about the political climate, key figures involved, and the impact on ordinary citizens.
          </p>
          
          <h2>Key Historical Periods</h2>
          <ul>
            <li><strong>1939-1945: World War II</strong> - Period of Nazi occupation and resistance movements</li>
            <li><strong>1945-1953: Stalinization</strong> - Imposition of Soviet-style political systems in Central and Eastern Europe</li>
            <li><strong>1953-1968: Post-Stalin Era</strong> - Period of relative liberalization with continued political control</li>
            <li><strong>1968-1977: Normalization</strong> - Increased repression following the Prague Spring</li>
            <li><strong>1977-1989: Late Communist Period</strong> - Rise of dissident movements and eventual collapse of communist regimes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;