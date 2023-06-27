import Grid from '@mui/material/Grid';
import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';

import { useTranslation } from 'react-i18next';
import { TypeFeature } from '../../model';
import { FeatureImage } from '../feature-image';

export const FeatureCard = ({ id, title, image }: TypeFeature): JSX.Element => {
  const { t } = useTranslation();

  return (
    <StyledGrid item gap={2} xs={6} md={6} lg={6}>
      <FeatureImage src={image} alt={title} />
      <Typography variant="h3" component="h3" textAlign="center" sx={{ mt: 3 }}>
        {t(`features.title${id}`)}
      </Typography>
      <Typography variant="subtitle2" component="p" textAlign="center" sx={{ mt: 1 }}>
        {t(`features.description${id}`)}
      </Typography>
    </StyledGrid>
  );
};

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  minWidth: 280,
}));
