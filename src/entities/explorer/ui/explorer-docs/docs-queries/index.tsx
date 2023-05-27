import Divider from '@mui/material/Divider';
import { useTranslation } from 'react-i18next';

import { IArrayParsedShema as IExplorerDocsQueriesProps } from '../../../model';
import { DrawerHeader } from '../../explorer-drawer';
import { ExplorerDocsQuery } from '../docs-query';

export const ExplorerDocsQueries = ({ parsedSchema }: IExplorerDocsQueriesProps): JSX.Element => {
  const { t } = useTranslation();
  const schemaQueries = parsedSchema.find((field) => field.name === docsQuery.Query);

  return (
    <div style={{ width: 270, paddingTop: 6, display: 'flex', flexDirection: 'column' }}>
      <DrawerHeader>
        <h2>{t('explorer.documentation')}</h2>
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
