import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from './routes';

const EditorPage = lazy(async () => ({
  default: (await import('./editor')).EditorPage,
}));

const RegPage = lazy(async () => ({
  default: (await import('./reg')).RegPage,
}));

const LoginPage = lazy(async () => ({
  default: (await import('./login')).LoginPage,
}));

const WelcomePage = lazy(async () => ({
  default: (await import('./welcome')).WelcomePage,
}));

const NotFoundPage = lazy(async () => ({
  default: (await import('./not-found')).NotFoundPage,
}));

const Layout = lazy(async () => ({
  default: (await import('@/shared/ui')).Layout,
}));

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
