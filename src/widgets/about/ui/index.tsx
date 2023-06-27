import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { RefObject } from 'react';
import { useTranslation } from 'react-i18next';

import { FeatureCard, featuresService } from '@/entities/feature-list';
import { a11yAboutUsWrapper, a11yHeader2TextAlign } from '@/shared/lib/theme';
import { Section } from '@/shared/ui';

const features = featuresService.getAll();

export const About = ({ aboutRef }: IAboutUsProps) => {
  const { t } = useTranslation();

  return (
    <Section ref={aboutRef}>
      <Typography variant="h2" component="h2" sx={{ ...a11yHeader2TextAlign() }}>
        {t('features.title')}
      </Typography>

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
