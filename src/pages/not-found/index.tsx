import { useTranslation } from 'react-i18next';

import { useTitle } from '@/shared/lib';

export const NotFoundPage = (): JSX.Element => {
  const { t } = useTranslation();

  useTitle(t('page-title.not-found'));

  return (
    <>
      <h1>Not Found page</h1>
    </>
  );
};
