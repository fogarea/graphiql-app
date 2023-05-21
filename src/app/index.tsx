import './index.scss';
import { withProviders } from '@/app/providers';
import { Routing } from './app-routing';

export const App = withProviders((): JSX.Element => <Routing />);
