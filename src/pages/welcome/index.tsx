import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { WelcomeHeroLayout } from '@/widgets/welcome-hero';
import { AboutUs } from '@/widgets/about-us';
import { useTitle } from '@/shared/lib';

export const WelcomePage = (): JSX.Element => {
  const { t } = useTranslation();
  const aboutUsRef = useRef<HTMLDivElement>(null);

  useTitle(t('page-title.welcome'));

  const handleScrollClick = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <WelcomeHeroLayout onScrollClick={handleScrollClick} />
      <AboutUs aboutUsRef={aboutUsRef} />
    </>
  );
};
