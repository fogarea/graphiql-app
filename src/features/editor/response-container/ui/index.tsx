import { ResponseEditor, prettifiedJSONContent } from '@/entities/editor';
import { ExplorerToolbar, useExplorer } from '@/entities/explorer';
import { ColumnWrapper } from '@/shared/ui';
import Grid from '@mui/material/Grid/Grid';
import { useEffect, useState } from 'react';

const jsonString = '{"data": {"hero": {"name": "R2-D2"}}}';

export const ResponseContainer = (): JSX.Element => {
  const [json, setJson] = useState('');
  const { handleToggleDocumentation } = useExplorer();

  useEffect(() => {
    prettifiedJSONContent(jsonString, (value: string) => {
      setJson(value);
    });
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid item xs>
        <ResponseEditor json={json} />
      </Grid>
      <Grid item sm={1} display={{ xs: 'none', md: 'block' }} style={{ maxWidth: 40 }}>
        <ColumnWrapper>
          <ExplorerToolbar toggleDocumentation={handleToggleDocumentation} />
        </ColumnWrapper>
      </Grid>
    </Grid>
  );
};
