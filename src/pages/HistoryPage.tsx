import React from 'react';
import { useTranslation } from 'react-i18next';

const HistoryPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('history.title')}</h1>
        
        <div className="prose prose-blue max-w-none">
          <h2>{t('history.introduction')}</h2>
          <p>
            The history of political repressions in Central and Eastern Europe is deeply intertwined with the rise and entrenchment of totalitarian regimes in the 20th century. Understanding this history is essential for comprehending the lived experiences of millions of people who suffered under these systems and for preventing similar abuses in the future.
          </p>
          
          <div className="my-8">
            <img 
              src="https://images.pexels.com/photos/6172771/pexels-photo-6172771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Historical image representing political repression" 
              className="w-full h-64 object-cover rounded-lg" 
            />
            <p className="text-sm text-gray-500 mt-2">
              Memorial to victims of political repression (representative image)
            </p>
          </div>
          
          <h2>Mechanisms of Repression</h2>
          <p>
            Totalitarian regimes employed various mechanisms to control their populations and eliminate perceived opposition:
          </p>
          <ul>
            <li>
              <strong>Political Trials</strong>: Show trials were used to publicly disgrace and eliminate political opponents while sending a message to the broader society.
            </li>
            <li>
              <strong>State Security Apparatus</strong>: Secret police organizations monitored civilians, recruited informants, and carried out arrests and interrogations.
            </li>
            <li>
              <strong>Labor Camps</strong>: Systems of forced labor camps were established to punish "enemies of the state" and utilize their labor for economic production.
            </li>
            <li>
              <strong>Censorship</strong>: Strict control over media, literature, art, and education ensured that only state-approved messages reached the public.
            </li>
            <li>
              <strong>Economic Control</strong>: State ownership of property and means of production was used to reward loyalty and punish dissent.
            </li>
          </ul>
          
          <h2>Categories of Victims</h2>
          <p>
            Repression targeted various groups in society, including:
          </p>
          <ul>
            <li>Political opponents and members of non-communist parties</li>
            <li>Religious leaders and active believers</li>
            <li>Intellectuals, artists, and writers with independent views</li>
            <li>Former military officers and civil servants from previous regimes</li>
            <li>Ethnic minorities and certain social classes (e.g., landowners, entrepreneurs)</li>
            <li>Anyone accused of "bourgeois nationalism" or "cosmopolitanism"</li>
            <li>Later, reform-minded members within the communist parties themselves</li>
          </ul>
          
          <h2>Resistance and Survival</h2>
          <p>
            Despite the pervasive nature of repression, various forms of resistance emerged:
          </p>
          <ul>
            <li>
              <strong>Samizdat</strong>: Underground publication and distribution of censored literature
            </li>
            <li>
              <strong>Unofficial Cultural Activities</strong>: Private gatherings for lectures, concerts, and discussions
            </li>
            <li>
              <strong>Religious Practice</strong>: Continuing religious observance despite official atheism
            </li>
            <li>
              <strong>Human Rights Initiatives</strong>: Groups like Charter 77 documented abuses and appealed to international agreements
            </li>
            <li>
              <strong>Everyday Resistance</strong>: Small acts of non-compliance and maintaining private spheres of truth
            </li>
          </ul>
          
          <h2>Legacy and Memory</h2>
          <p>
            The legacy of political repressions continues to shape societies in post-communist countries:
          </p>
          <ul>
            <li>Debates over historical justice and accountability for perpetrators</li>
            <li>Challenges in accessing and interpreting secret police archives</li>
            <li>Commemorating victims and creating spaces for public memory</li>
            <li>Addressing intergenerational trauma</li>
            <li>Developing educational approaches to teach this complex history</li>
          </ul>
          
          <p>
            This museum aims to contribute to the ongoing process of documenting, understanding, and learning from this difficult chapter of history.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;