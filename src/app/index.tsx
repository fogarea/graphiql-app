import './index.scss';
import { withProviders } from '@/app/providers';
import { Routing } from '@/pages';

export const App = withProviders((): JSX.Element => <Routing />);
