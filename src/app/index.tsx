import { NavLink } from 'react-router-dom';

import './index.scss';
import { Routing } from '@/pages';
import { withProviders } from '@/app/providers';
import { routes } from '@/pages/routes';

export const App = withProviders((): JSX.Element => {
  return (
    <>
      <Routing />
      <div style={{ marginTop: '50px' }}>
        <nav>
          <ul>
            <li>
              <NavLink to={routes.welcome}>Welcome page</NavLink>
            </li>
            <li>
              <NavLink to={routes.editor}>Editor page</NavLink>
            </li>
            <li>
              <NavLink to={routes.login}>Login page</NavLink>
            </li>
            <li>
              <NavLink to={routes.register}>Register page</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
});
