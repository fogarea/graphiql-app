import { ResponseEditor, prettifiedJSONContent } from '@/entities/editor';
import { ExplorerToolbar } from '@/entities/explorer';
import Grid from '@mui/material/Grid/Grid';
import { useEffect, useState } from 'react';

const jsonString = '{"data": {"hero": {"name": "R2-D2"}}}';

export const ResponseContainer = (): JSX.Element => {
  const [json, setJson] = useState('');

  useEffect(() => {
    prettifiedJSONContent(jsonString, (value: string) => {
      setJson(value);
    });
  }, []);

  const handleToggleDocumentation = (): void => {
    console.log('handleToggleDocumentation');
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs>
        <ResponseEditor json={json} />
      </Grid>
      <Grid item sm={1} display={{ xs: 'none', md: 'block' }} style={{ maxWidth: 40 }}>
        <ExplorerToolbar toggleDocumentation={handleToggleDocumentation} />
      </Grid>
    </Grid>
  );
};
