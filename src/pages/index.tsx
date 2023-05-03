import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from './routes';
import { PrivateRoute } from '@/features/private-route';

const EditorPage = lazy(async () => ({
  default: (await import('./editor')).EditorPage,
}));

const RegisterPage = lazy(async () => ({
  default: (await import('./register')).RegisterPage,
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
  default: (await import('@/widgets/layout')).Layout,
}));

export const Routing = (): JSX.Element => (
  <Routes>
    <Route path={routes.welcome} element={<Layout />}>
      <Route index element={<WelcomePage />} />
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.register} element={<RegisterPage />} />
      <Route
        path={routes.editor}
        element={
          <PrivateRoute>
            <EditorPage />
          </PrivateRoute>
        }
      />
      <Route path="/*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
