import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { About } from '@/widgets/about';
import { WelcomeHeroLayout } from '@/widgets/welcome-hero';
import { useTitle } from '@/shared/lib/browser';

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
      <About aboutRef={aboutUsRef} />
    </>
  );
};
