import { EditorToolbar, QueryEditor, prettifiedQueryContent } from '@/entities/editor';
import { copyToClipBoard } from '@/shared/lib';
import Grid from '@mui/material/Grid/Grid';
import { useState } from 'react';

export const EditorContainer = (): JSX.Element => {
  const [queryCode, setQueryCode] = useState('');

  const handleSetCode = (value: string) => {
    setQueryCode(value);
    console.log(value);
  };

  const execQuery = (): void => {
    console.log('execQuery');
  };

  const prettifyQuery = (): void => {
    prettifiedQueryContent(queryCode, (value: string) => {
      setQueryCode(value);
    });
  };

  const copyQuery = (): void => {
    copyToClipBoard(queryCode);
  };

  const cleanQuery = (): void => {
    setQueryCode('');
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs>
        <QueryEditor code={queryCode} setCode={handleSetCode} />
      </Grid>
      <Grid item sm={1} display={{ xs: 'none', md: 'block' }} style={{ maxWidth: 40 }}>
        <EditorToolbar
          execQuery={execQuery}
          prettifyQuery={prettifyQuery}
          copyQuery={copyQuery}
          cleanQuery={cleanQuery}
        />
      </Grid>
    </Grid>
  );
};
