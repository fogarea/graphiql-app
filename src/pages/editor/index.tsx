import Typography from '@mui/material/Typography';
import { GraphQLEditor } from '@/widgets/graphql-editor';
import { a11yHeaderTextAlign } from '@/shared/theme';
import { useTranslation } from 'react-i18next';

export const EditorPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h1" sx={{ ...a11yHeaderTextAlign() }}>
        Graph<i>i</i>QL {t('editor.q-editor')}
      </Typography>
      <GraphQLEditor />
    </>
  );
};
