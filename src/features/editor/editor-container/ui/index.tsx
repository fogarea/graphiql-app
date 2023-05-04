import { QueryEditor } from '@/entities/editor';
import Grid from '@mui/material/Grid/Grid';
import { useState } from 'react';

export const EditorContainer = (): JSX.Element => {
  const [queryCode, setQueryCode] = useState('');

  const handleSetCode = (value: string) => {
    setQueryCode(value);
    console.log(value);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs>
        <QueryEditor code={queryCode} setCode={handleSetCode} />
      </Grid>
      <Grid item sm={1} display={{ xs: 'none', md: 'block' }} style={{ maxWidth: 40 }}>
        CMD
      </Grid>
    </Grid>
  );
};
