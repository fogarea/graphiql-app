// import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { GraphQLEditor } from '@/widgets/graphql-editor';
// import { useExplorer } from '@/entities/explorer';
import { useTitle } from '@/shared/lib/browser';

export const EditorPage = (): JSX.Element => {
  const { t } = useTranslation();
  // const { isLoaded, parsedSchema, execSchema } = useExplorer();

  useTitle(t('page-title.editor'));

  /*  useEffect(() => {
    if (!isLoaded || !parsedSchema) {
      execSchema();
    }
  }, [isLoaded, parsedSchema, execSchema]); */

  return <GraphQLEditor />;
};
