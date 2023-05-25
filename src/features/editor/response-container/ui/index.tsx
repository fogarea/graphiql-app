import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { ResponseEditor, useResponseEditor } from '@/entities/editor';
import { alert } from '@/shared/lib/browser';

export const ResponseContainer = (): JSX.Element => {
  const { t } = useTranslation();
  const { isFetching, responseCode, error, setError } = useResponseEditor();

  useEffect(() => {
    if (error) {
      alert.error(`${t('alert.query-error')} ${error}`);
      setError('');
    }
  }, [error, t, setError]);

  return <ResponseEditor isFetching={isFetching} json={responseCode} />;
};
