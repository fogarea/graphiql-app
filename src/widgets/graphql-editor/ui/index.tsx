import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import { a11yColumnHeight } from '@/shared/theme';
import { EditorContainer, ResponseContainer, ToolbarContainer } from '@/features/editor';
import { ExplorerContainer } from '@/features/explorer-container';
import { ColumnXsNoneMd40, StackRowVertical } from '@/shared/ui';

export const GraphQLEditor = (): JSX.Element => {
  return (
    <>
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
              <Card variant="outlined" sx={{ height: '100%' }}>
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
