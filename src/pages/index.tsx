import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from '@/features/private-route';
import { TypeAppRoute } from '@/shared/config';

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
    <Route path={TypeAppRoute.Welcome} element={<Layout />}>
      <Route index element={<WelcomePage />} />
      <Route path={TypeAppRoute.Login} element={<LoginPage />} />
      <Route path={TypeAppRoute.Register} element={<RegisterPage />} />
      <Route
        path={TypeAppRoute.Editor}
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
