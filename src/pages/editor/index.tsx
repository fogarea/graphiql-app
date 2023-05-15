import Container from '@mui/material/Container';

import { GraphQLEditor } from '@/widgets/graphql-editor';

export const EditorPage = (): JSX.Element => {
  return (
    <Container maxWidth="xl">
      <GraphQLEditor />
    </Container>
  );
};
