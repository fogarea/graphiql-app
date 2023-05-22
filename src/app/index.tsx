import './index.scss';
import { withProviders } from '@/app/providers';
import { AppRouting } from './app-routing';

export const App = withProviders((): JSX.Element => <AppRouting />);
