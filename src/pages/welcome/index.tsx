import { WelcomeHeroLayout } from '@/widgets/welcome-hero';
import { AboutUs } from '@/widgets/about-us';
import { useRef } from 'react';

export const WelcomePage = (): JSX.Element => {
  const aboutUsRef = useRef<HTMLDivElement>(null);

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
