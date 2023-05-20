// import { useTranslation } from 'react-i18next';
import { Divider } from '@mui/material';

import {
  ExplorerDocsQuery,
  IArrayParsedShema as IExplorerDocsQueriesProps,
} from '@/entities/explorer';
import { DrawerHeader } from '../../explorer-drawer/drawer-header';

export const ExplorerDocsQueries = ({ parsedSchema }: IExplorerDocsQueriesProps): JSX.Element => {
  // const { t } = useTranslation();
  const schemaQueries = parsedSchema.find((field) => field.name === docsQuery.Query);

  return (
    <div style={{ width: 270, display: 'flex', flexDirection: 'column' }}>
      <DrawerHeader>
        {/* <h2>{t('explorer.documentation')}</h2> */}
        <h2>QUERIES</h2>
      </DrawerHeader>
      <Divider />
      {schemaQueries &&
        schemaQueries.args.map((name) => <ExplorerDocsQuery key={name.id} typeArguments={name} />)}
    </div>
  );
};

enum docsQuery {
  Query = 'Query',
}
