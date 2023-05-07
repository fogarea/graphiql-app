import Typography from '@mui/material/Typography';
import { GraphQLEditor } from '@/widgets/graphql-editor';
import { a11yHeaderTextAlign } from '@/shared/theme';

export const EditorPage = (): JSX.Element => {
  return (
    <>
      <Typography variant="h1" sx={{ ...a11yHeaderTextAlign() }}>
        Graph<i>i</i>QL Editor
      </Typography>
      <GraphQLEditor />
    </>
  );
};
