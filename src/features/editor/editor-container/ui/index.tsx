import { EditorToolbar, QueryEditor, useQueryEditor } from '@/entities/editor';
import { ExplorerToolbar, useExplorer } from '@/entities/explorer';
import { ColumnWrapper } from '@/shared/ui';
import Divider from '@mui/material/Divider/Divider';
import Grid from '@mui/material/Grid/Grid';
import Stack from '@mui/material/Stack/Stack';

export const EditorContainer = (): JSX.Element => {
  const { queryCode, execQuery, prettifyQuery, copyQuery, cleanQuery, setQueryCode } =
    useQueryEditor();
  const { handleToggleDocumentation } = useExplorer();

  const handleSetCode = (value: string) => {
    setQueryCode(value);
    console.log(value);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} display={{ md: 'none' }}>
        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
          <EditorToolbar
            execQuery={execQuery}
            prettifyQuery={prettifyQuery}
            copyQuery={copyQuery}
            cleanQuery={cleanQuery}
          />
          <ExplorerToolbar toggleDocumentation={handleToggleDocumentation} />
        </Stack>
      </Grid>
      <Grid item xs>
        <QueryEditor code={queryCode} setCode={handleSetCode} />
      </Grid>
      <Grid item sm={1} display={{ xs: 'none', md: 'block' }} style={{ maxWidth: 40 }}>
        <ColumnWrapper>
          <EditorToolbar
            execQuery={execQuery}
            prettifyQuery={prettifyQuery}
            copyQuery={copyQuery}
            cleanQuery={cleanQuery}
          />
        </ColumnWrapper>
      </Grid>
    </Grid>
  );
};
