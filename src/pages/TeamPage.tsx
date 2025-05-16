import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Link2 } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  email?: string;
  imageUrl: string;
}

interface PartnerInstitution {
  id: number;
  name: string;
  description: string;
  logoUrl?: string;
  websiteUrl: string;
}

const TeamPage: React.FC = () => {
  const { t } = useTranslation();
  
  // Sample team data
  const leadership: TeamMember[] = [
    {
      id: 1,
      name: 'Dr. Anna Svobodová',
      role: 'Project Director',
      bio: 'Dr. Svobodová specializes in the history of totalitarian regimes and memory studies. She has published extensively on the subject of political repressions in Central Europe.',
      email: 'anna.svobodova@example.com',
      imageUrl: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      name: 'Prof. Jan Novák',
      role: 'Academic Director',
      bio: 'Professor Novák leads the academic research component of our museum. His work focuses on oral history methodologies and archival practices in post-communist societies.',
      email: 'jan.novak@example.com',
      imageUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];
  
  const researchers: TeamMember[] = [
    {
      id: 3,
      name: 'Dr. Martina Dvořáková',
      role: 'Senior Researcher',
      bio: 'Dr. Dvořáková specializes in the history of labor camps and forced labor practices in Czechoslovakia during the communist period.',
      email: 'martina.dvorakova@example.com',
      imageUrl: 'https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      name: 'Tomáš Černý, Ph.D.',
      role: 'Digital Humanities Specialist',
      bio: 'Dr. Černý focuses on applying digital humanities methodologies to historical research, with particular expertise in data visualization and spatial mapping of historical events.',
      email: 'tomas.cerny@example.com',
      imageUrl: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 5,
      name: 'Lucie Zemanová',
      role: 'Oral History Researcher',
      bio: 'Ms. Zemanová coordinates our oral history collection efforts, focusing on gathering testimonies from survivors and family members affected by political repressions.',
      email: 'lucie.zemanova@example.com',
      imageUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];
  
  const partners: PartnerInstitution[] = [
    {
      id: 1,
      name: 'Institute for the Study of Totalitarian Regimes',
      description: 'A public research institution focused on the study of the Nazi occupation and communist rule in Czechoslovakia.',
      websiteUrl: 'https://www.ustrcr.cz/'
    },
    {
      id: 2,
      name: 'Charles University - Faculty of Arts',
      description: 'Academic partner providing research expertise and educational resources.',
      websiteUrl: 'https://www.ff.cuni.cz/'
    },
    {
      id: 3,
      name: 'National Archives',
      description: 'Collaboration partner providing access to important historical documents and archives.',
      websiteUrl: 'https://www.nacr.cz/'
    },
    {
      id: 4,
      name: 'Memorial to the Victims of Communism Foundation',
      description: 'Non-profit organization dedicated to preserving the memory of victims of communist regimes.',
      websiteUrl: 'https://example.org/memorial'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('team.title')}</h1>
        <p className="text-xl text-gray-600">
          Meet the researchers, historians, and staff behind the Virtual Museum of Repressions.
        </p>
      </div>
      
      <div className="space-y-16">
        {/* Leadership */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('team.leadershipTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map(member => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src={member.imageUrl}
                      alt={member.name}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-900 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                    
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center text-sm text-blue-900 hover:text-blue-700"
                      >
                        <Mail className="h-4 w-4 mr-1" />
                        {member.email}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Researchers */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('team.researchersTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchers.map(member => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  className="h-64 w-full object-cover"
                  src={member.imageUrl}
                  alt={member.name}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-900 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                  
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center text-sm text-blue-900 hover:text-blue-700"
                    >
                      <Mail className="h-4 w-4 mr-1" />
                      Contact
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Partner Institutions */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('team.partnersTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map(partner => (
              <div key={partner.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                
                <a
                  href={partner.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-blue-900 hover:text-blue-700"
                >
                  <Link2 className="h-4 w-4 mr-1" />
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamPage;