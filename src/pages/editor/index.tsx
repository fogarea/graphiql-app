import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';

import { GraphQLEditor } from '@/widgets/graphql-editor';
import { useTitle } from '@/shared/lib';

export const EditorPage = (): JSX.Element => {
  const { t } = useTranslation();

  useTitle(t('page-title.editor'));

  return (
    <Container maxWidth="xl">
      <GraphQLEditor />
    </Container>
  );
};
