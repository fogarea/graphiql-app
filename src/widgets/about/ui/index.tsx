import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import { RefObject } from 'react';

import { featuresService, MFeatureCard } from '@/entities/feature-list';
import { a11yAboutUsWrapper } from '@/shared/lib/theme';
import { Section } from '@/shared/ui';
import { featuresAnimation } from '../lib';

const features = featuresService.getAll();

export const About = ({ aboutRef }: IAboutUsProps) => {
  return (
    <Section ref={aboutRef}>
      <MGrid
        whileInView="visible"
        initial="hidden"
        viewport={{ amount: 0.2, once: true }}
        container
        justifyContent="center"
        sx={{ ...a11yAboutUsWrapper() }}
      >
        {features.map((feature, index) => (
          <MFeatureCard
            variants={featuresAnimation}
            custom={index + 1}
            key={feature.id}
            {...feature}
          />
        ))}
      </MGrid>
    </Section>
  );
};

interface IAboutUsProps {
  aboutRef?: RefObject<HTMLDivElement>;
}

const MGrid = motion(Grid);
