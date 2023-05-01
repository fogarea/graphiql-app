import { Route, Routes } from 'react-router-dom';

import { routes } from './routes';
import { EditorPage } from './editor';
import { RegPage } from './reg';
import { LoginPage } from './login';
import { WelcomePage } from './welcome';
import { NotFoundPage } from './not-found';
import { Layout } from '@/shared/ui';

export const Routing = (): JSX.Element => (
  <Routes>
    <Route path={routes.welcome} element={<Layout />}>
      <Route index element={<WelcomePage />} />
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.register} element={<RegPage />} />
      <Route path={routes.editor} element={<EditorPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
