import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { a11yHeaderTextAlign } from '@/shared/theme';
import { useTranslation } from 'react-i18next';

import { GraphQLEditor } from '@/widgets/graphql-editor';

export const EditorPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl">
      <Typography variant="h1" sx={{ ...a11yHeaderTextAlign() }}>
        Graph<i>i</i>QL {t('editor.q-editor')}
      </Typography>
      <GraphQLEditor />
    </Container>
  );
};
