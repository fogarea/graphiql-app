import Card from '@mui/material/Card';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';

import { EditorContainer, ResponseContainer, ToolbarContainer } from '@/features/editor';
import { DrawerBox, useDrawer } from '@/entities/drawer';
import { a11yColumnHeight, a11yHeaderTextAlign } from '@/shared/lib/theme';
import { ColumnXsNoneMd40, StackRowVertical, Section } from '@/shared/ui';

export const GraphQLEditor = (): JSX.Element => {
  const { t } = useTranslation();
  const { isOpen, toggleDrawer } = useDrawer();

  const ExplorerContainer = lazy(async () => ({
    default: (await import('@/features/explorer-container')).ExplorerContainer,
  }));

  return (
    <Section>
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
      {isOpen && (
        <DrawerBox open={isOpen} toggleDrawer={() => toggleDrawer()}>
          <Suspense fallback={<CircularProgress sx={{ margin: '2rem auto' }} />}>
            <ExplorerContainer />
          </Suspense>
        </DrawerBox>
      )}
    </Section>
  );
};
