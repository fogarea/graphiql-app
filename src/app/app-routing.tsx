import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from '@/features/private-route';
import { TypeAppRoute } from '@/shared/config';
import { AppLayout } from './app-layout';

const EditorPage = lazy(async () => ({
  default: (await import('@/pages/editor')).EditorPage,
}));

const RegisterPage = lazy(async () => ({
  default: (await import('@/pages/register')).RegisterPage,
}));

const LoginPage = lazy(async () => ({
  default: (await import('@/pages/login')).LoginPage,
}));

const WelcomePage = lazy(async () => ({
  default: (await import('@/pages/welcome')).WelcomePage,
}));

const NotFoundPage = lazy(async () => ({
  default: (await import('@/pages/not-found')).NotFoundPage,
}));

export const AppRouting = (): JSX.Element => (
  <Routes>
    <Route path={TypeAppRoute.Welcome} element={<AppLayout />}>
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
