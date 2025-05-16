import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// Sample timeline data - in a real app, this would come from an API or database
const timelineData = [
  { id: 1, year: 1939, title: 'World War II Begins', description: 'The outbreak of World War II led to widespread repressions across Europe.' },
  { id: 2, year: 1945, title: 'Post-War Period', description: 'The end of World War II and beginning of the Cold War era.' },
  { id: 3, year: 1948, title: 'Communist Takeover', description: 'Communist coup in Czechoslovakia leading to political persecutions.' },
  { id: 4, year: 1950, title: 'Political Trials', description: 'Series of show trials against "enemies of the state".' },
  { id: 5, year: 1968, title: 'Prague Spring', description: 'Period of political liberalization crushed by Soviet invasion.' },
  { id: 6, year: 1969, title: 'Normalization', description: 'Period of repression following the Warsaw Pact invasion.' },
  { id: 7, year: 1977, title: 'Charter 77', description: 'Informal civic initiative criticizing the government for human rights violations.' },
  { id: 8, year: 1989, title: 'Velvet Revolution', description: 'End of communist rule in Czechoslovakia.' }
];

interface TimelineItemProps {
  item: typeof timelineData[0];
  isActive: boolean;
  onClick: () => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, isActive, onClick }) => {
  return (
    <motion.div
      className={`
        absolute cursor-pointer transform -translate-y-1/2 transition-all duration-300
        ${isActive ? 'scale-125 z-10' : 'opacity-70 hover:opacity-100'}
      `}
      style={{ left: `${((item.year - 1939) / (1989 - 1939)) * 100}%` }}
      whileHover={{ scale: isActive ? 1.25 : 1.1 }}
      onClick={onClick}
    >
      <div className="flex flex-col items-center">
        <div 
          className={`
            w-4 h-4 rounded-full mb-2
            ${isActive ? 'bg-blue-600 ring-4 ring-blue-200' : 'bg-gray-500'}
          `}
        />
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-6 bg-white rounded-lg shadow-md p-4 w-64 z-20"
          >
            <h4 className="font-bold text-gray-900 mb-1">{item.title} ({item.year})</h4>
            <p className="text-sm text-gray-600">{item.description}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const TimelineSlider: React.FC = () => {
  const { t } = useTranslation();
  const [activeItemId, setActiveItemId] = useState<number | null>(null);
  const [sliderValue, setSliderValue] = useState(50); // Middle of the timeline by default

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setSliderValue(value);
    
    // Calculate which item should be active based on slider position
    const yearRange = 1989 - 1939;
    const currentYear = 1939 + (yearRange * value / 100);
    
    // Find the closest item to the current year
    let closestItem = timelineData[0];
    let minDistance = Math.abs(currentYear - closestItem.year);
    
    timelineData.forEach(item => {
      const distance = Math.abs(currentYear - item.year);
      if (distance < minDistance) {
        minDistance = distance;
        closestItem = item;
      }
    });
    
    if (minDistance < yearRange * 0.05) { // 5% of the total range
      setActiveItemId(closestItem.id);
    } else {
      setActiveItemId(null);
    }
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('timeline.title')}</h2>
      <p className="text-gray-600 mb-12 text-center">{t('timeline.instructions')}</p>
      
      <div className="max-w-5xl mx-auto">
        {/* Timeline display */}
        <div className="relative h-32 mb-8">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300">
            <div className="absolute top-0 left-0 h-full bg-blue-600" style={{ width: `${sliderValue}%` }}></div>
          </div>
          
          {/* Timeline markers */}
          {timelineData.map(item => (
            <TimelineItem 
              key={item.id} 
              item={item} 
              isActive={item.id === activeItemId}
              onClick={() => setActiveItemId(item.id)}
            />
          ))}
          
          {/* Year labels */}
          <div className="absolute top-full left-0 mt-4 text-sm text-gray-600">1939</div>
          <div className="absolute top-full right-0 mt-4 text-sm text-gray-600">1989</div>
        </div>
        
        {/* Slider control */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TimelineSlider;