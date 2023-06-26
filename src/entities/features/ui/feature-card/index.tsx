import Grid from '@mui/material/Grid';
import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';

import { TypeFeature } from '../../model';
import { FeatureImage } from '../feature-image';

export const FeatureCard = ({ title, image, description }: TypeFeature): JSX.Element => {
  return (
    <StyledGrid item gap={2} xs={6} md={6} lg={6}>
      <FeatureImage src={image} alt={title} />
      <Typography variant="h3" component="h3" textAlign="center" sx={{ mt: 3 }}>
        {title}
      </Typography>
      <Typography variant="subtitle2" component="p" textAlign="center" sx={{ mt: 1 }}>
        {description}
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

/*

import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';

import { TypeFeature } from '../../model';
import { DeveloperAvatar } from '../feature-image';

export const DeveloperCard = ({ title, image, description }: TypeFeature): JSX.Element => {
  return (
    <StyledGrid item gap={2} xs>
      <img src={image} alt={title} width={300} height={300} />
      <Typography variant="h3" component="h3" textAlign="center" sx={{ mt: 3 }}>
        {title}
      </Typography>
      <Typography variant="body1" component="p" textAlign="center" sx={{ mt: 3 }}>
        {description}
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
  borderRadius: theme.spacing(2),
  minWidth: 280,
}));
*/
