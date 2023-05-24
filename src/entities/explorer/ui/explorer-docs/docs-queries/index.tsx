import { Divider } from '@mui/material';

import {
  ExplorerDocsQuery,
  IArrayParsedShema as IExplorerDocsQueriesProps,
} from '@/entities/explorer';
import { DrawerHeader } from '../../explorer-drawer/drawer-header';

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
