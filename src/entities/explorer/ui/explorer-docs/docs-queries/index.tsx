import { ParserField } from 'graphql-js-tree';
import { useTranslation } from 'react-i18next';
import { Divider } from '@mui/material';

import { ExplorerDocsQuery } from '@/entities/explorer';
import { DrawerHeader } from '../../explorer-drawer/drawer-header';

export const ExplorerDocsQueries = ({ parsedSchema }: IExplorerDocsQueriesProps): JSX.Element => {
  const { t } = useTranslation();
  const schemaQueries = parsedSchema.find((field) => field.name === docsQuery.Query);

  return (
    <div>
      <DrawerHeader>
        <h2>{t('explorer.documentation')}</h2>
      </DrawerHeader>
      <Divider />
      {schemaQueries &&
        schemaQueries.args.map((name) => <ExplorerDocsQuery key={name.id} {...name} />)}
    </div>
  );
};

interface IExplorerDocsQueriesProps {
  parsedSchema: ParserField[];
}

enum docsQuery {
  Query = 'Query',
}
