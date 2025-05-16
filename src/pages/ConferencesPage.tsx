import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface Conference {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  isUpcoming: boolean;
  registrationUrl?: string;
}

const ConferencesPage: React.FC = () => {
  const { t } = useTranslation();
  
  // Sample conference data
  const conferences: Conference[] = [
    {
      id: 1,
      title: 'International Symposium on Digital Memory Preservation',
      date: '2025-09-15',
      location: 'Prague, Czech Republic',
      description: 'A three-day symposium focused on best practices for preserving digital historical archives and making them accessible to the public.',
      isUpcoming: true,
      registrationUrl: '#'
    },
    {
      id: 2,
      title: 'Conference on Teaching Difficult History',
      date: '2025-11-10',
      location: 'Online (Virtual Event)',
      description: 'Educators and historians will share methods for teaching about political repressions and totalitarian systems to students of different age groups.',
      isUpcoming: true,
      registrationUrl: '#'
    },
    {
      id: 3,
      title: 'Workshop: Oral History Techniques',
      date: '2024-05-22',
      location: 'Brno, Czech Republic',
      description: 'A practical workshop focused on techniques for collecting, recording, and preserving oral history testimonies from survivors of political repression.',
      isUpcoming: false
    },
    {
      id: 4,
      title: 'Symposium: Archives and Their Political Dimensions',
      date: '2024-02-15',
      location: 'Warsaw, Poland (Hybrid Event)',
      description: 'An international symposium examining the political dimensions of archival practices in post-communist countries.',
      isUpcoming: false
    }
  ];
  
  const upcomingConferences = conferences.filter(conf => conf.isUpcoming);
  const pastConferences = conferences.filter(conf => !conf.isUpcoming);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('conferences.title')}</h1>
        <p className="text-xl text-gray-600">
          Stay updated on our academic conferences, workshops, and events related to the study of political repressions.
        </p>
      </div>
      
      <div className="space-y-12">
        {/* Upcoming Conferences */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('conferences.upcomingEvents')}</h2>
          
          {upcomingConferences.length > 0 ? (
            <div className="space-y-6">
              {upcomingConferences.map(conference => (
                <div key={conference.id} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{conference.title}</h3>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-2 text-blue-900" />
                      <time dateTime={conference.date}>
                        {new Date(conference.date).toLocaleDateString()}
                      </time>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-2 text-blue-900" />
                      <span>{conference.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{conference.description}</p>
                  
                  {conference.registrationUrl && (
                    <a
                      href={conference.registrationUrl}
                      className="inline-flex items-center bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors duration-200"
                    >
                      Register Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <p className="text-gray-600">{t('conferences.noEvents')}</p>
            </div>
          )}
        </div>
        
        {/* Past Conferences */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('conferences.pastEvents')}</h2>
          
          {pastConferences.length > 0 ? (
            <div className="space-y-6">
              {pastConferences.map(conference => (
                <div key={conference.id} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{conference.title}</h3>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-2 text-blue-900" />
                      <time dateTime={conference.date}>
                        {new Date(conference.date).toLocaleDateString()}
                      </time>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-2 text-blue-900" />
                      <span>{conference.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600">{conference.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <p className="text-gray-600">No past events to display.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConferencesPage;