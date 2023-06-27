import Grid from '@mui/material/Grid';
import { RefObject } from 'react';

import { FeatureCard, featuresService } from '@/entities/feature-list';
import { a11yAboutUsWrapper } from '@/shared/lib/theme';
import { Section } from '@/shared/ui';

const features = featuresService.getAll();

export const About = ({ aboutRef }: IAboutUsProps) => {
  return (
    <Section ref={aboutRef}>
      <Grid container justifyContent="center" sx={{ ...a11yAboutUsWrapper() }}>
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </Grid>
    </Section>
  );
};

interface IAboutUsProps {
  aboutRef?: RefObject<HTMLDivElement>;
}
