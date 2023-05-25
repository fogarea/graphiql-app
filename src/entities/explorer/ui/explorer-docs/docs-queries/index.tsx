import { Divider } from '@mui/material';

import { IArrayParsedShema as IExplorerDocsQueriesProps } from '../../../model';
import { DrawerHeader } from '../../explorer-drawer';
import { ExplorerDocsQuery } from '../docs-query';

export const ExplorerDocsQueries = ({ parsedSchema }: IExplorerDocsQueriesProps): JSX.Element => {
  const schemaQueries = parsedSchema.find((field) => field.name === docsQuery.Query);

  return (
    <div style={{ width: 270, paddingTop: 6, display: 'flex', flexDirection: 'column' }}>
      <DrawerHeader>
        <h2>QUERIES</h2>
      </DrawerHeader>
      <Divider sx={{ marginBottom: 1 }} />
      {schemaQueries &&
        schemaQueries.args.map((name) => <ExplorerDocsQuery key={name.id} typeArguments={name} />)}
    </div>
  );
};

enum docsQuery {
  Query = 'Query',
}
