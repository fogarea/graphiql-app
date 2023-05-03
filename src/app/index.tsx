import './index.scss';
import { Routing } from '@/pages';
import { withProviders } from '@/app/providers';
import { StyledEngineProvider } from '@mui/material/styles';

export const App = withProviders(
  (): JSX.Element => (
    <StyledEngineProvider injectFirst>
      <Routing />
    </StyledEngineProvider>
  )
);
