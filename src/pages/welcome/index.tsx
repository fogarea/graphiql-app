import { WelcomeHeroLayout } from '@/widgets/welcome-hero';
import { AboutUs } from '@/widgets/about-us';

export const WelcomePage = (): JSX.Element => {
  return (
    <>
      <WelcomeHeroLayout />
      <AboutUs />
    </>
  );
};
