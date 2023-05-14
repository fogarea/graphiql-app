import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { useTranslation } from 'react-i18next';

import { a11yColumnHeight, a11yHeaderTextAlign } from '@/shared/theme';
import { EditorContainer, ResponseContainer, ToolbarContainer } from '@/features/editor';
import { ExplorerContainer } from '@/features/explorer-container';
import { ColumnXsNoneMd40, StackRowVertical } from '@/shared/ui';
import Typography from '@mui/material/Typography';

export const GraphQLEditor = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h1" sx={{ ...a11yHeaderTextAlign() }}>
        Graph<i>i</i>QL {t('editor.q-editor')}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
            <Grid item xs={12} display={{ md: 'none' }}>
              <StackRowVertical>
                <ToolbarContainer variant="all" />
              </StackRowVertical>
            </Grid>
            <Grid item xs height={{ ...a11yColumnHeight() }}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <EditorContainer />
              </Card>
            </Grid>
            <ColumnXsNoneMd40>
              <ToolbarContainer variant="editor" />
            </ColumnXsNoneMd40>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
            <Grid item xs height={{ ...a11yColumnHeight() }}>
              <Card variant="outlined" sx={{ height: '100%', position: 'relative' }}>
                <ResponseContainer />
              </Card>
            </Grid>
            <ColumnXsNoneMd40>
              <ToolbarContainer variant="explorer" />
            </ColumnXsNoneMd40>
          </Grid>
        </Grid>
      </Grid>
      <ExplorerContainer />
    </>
  );
};
