import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { IArrayParsedShema as IExplorerDocsQueriesProps } from '../../../model';
import { ExplorerDocsQuery } from '../docs-query';

export const ExplorerDocsQueries = ({ parsedSchema }: IExplorerDocsQueriesProps): JSX.Element => {
  const schemaQueries = parsedSchema.find((field) => field.name === docsQuery.Query);

  return (
    <div style={{ width: 275, paddingTop: 6, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" component="h3" sx={{ color: 'text.secondary', marginTop: 5 }}>
        Queries
      </Typography>
      <Divider sx={{ marginBottom: 1 }} />
      {schemaQueries &&
        schemaQueries.args.map((name) => <ExplorerDocsQuery key={name.id} typeArguments={name} />)}
    </div>
  );
};

enum docsQuery {
  Query = 'Query',
}
