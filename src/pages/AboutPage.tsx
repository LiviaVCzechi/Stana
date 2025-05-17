import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('about.title')}</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('about.mission')}</h2>
        <p className="text-lg text-primary-600">
          Our mission is to document and preserve the memory of Catholic priests who faced persecution
          in Communist Czechoslovakia, ensuring their stories and sacrifices are not forgotten.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('about.vision')}</h2>
        <p className="text-lg text-primary-600">
          We envision a digital space where future generations can learn about this important chapter
          of history, accessing authentic documents, testimonies, and historical records.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('about.goals')}</h2>
        <ul className="list-disc list-inside text-lg text-primary-600 space-y-2">
          <li>Document the stories of persecuted Catholic priests</li>
          <li>Preserve historical records and testimonies</li>
          <li>Create an educational resource for researchers and the public</li>
          <li>Honor the memory of those who suffered for their faith</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">{t('about.significance')}</h2>
        <p className="text-lg text-primary-600">
          This project serves as a crucial reminder of the importance of religious freedom and the
          consequences of its suppression, while helping to ensure that similar persecutions are
          prevented in the future.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;