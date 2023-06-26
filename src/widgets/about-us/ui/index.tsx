import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { RefObject } from 'react';
import { useTranslation } from 'react-i18next';

import { FeatureCard, featuresService } from '@/entities/features';
import { a11yAboutUsWrapper, a11yHeader2TextAlign } from '@/shared/lib/theme';
import { Section } from '@/shared/ui';

const features = featuresService.getAll();

export const AboutUs = ({ aboutUsRef }: IAboutUsProps) => {
  const { t } = useTranslation();

  return (
    <Section ref={aboutUsRef}>
      <Typography variant="h2" component="h2" sx={{ ...a11yHeader2TextAlign() }}>
        {t('welcome.our-team')}
      </Typography>

      <Grid container gap={2} justifyContent="center" sx={{ ...a11yAboutUsWrapper() }}>
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </Grid>
    </Section>
  );
};

interface IAboutUsProps {
  aboutUsRef?: RefObject<HTMLDivElement>;
}
