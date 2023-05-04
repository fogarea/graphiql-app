import { EditorContainer, ResponseContainer } from '@/features/editor';
import Grid from '@mui/material/Grid';

export const EditorPage = (): JSX.Element => {
  return (
    <>
      <h1>Editor page</h1>
      <Grid spacing={1}>
        <Grid item xs={12} md={6}>
          <EditorContainer />
        </Grid>
        <Grid item xs={12} md={6}>
          <ResponseContainer />
        </Grid>
      </Grid>
    </>
  );
};
