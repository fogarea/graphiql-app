import { ParserField } from 'graphql-js-tree';
import { useTranslation } from 'react-i18next';
import { Container, Divider } from '@mui/material';

import { ExplorerDocsQuery } from '@/entities/explorer';
import { DrawerHeader } from '../../explorer-drawer/drawer-header';

export const ExplorerDocsQueries = ({ parsedSchema }: IExplorerDocsQueriesProps): JSX.Element => {
  const { t } = useTranslation();
  const schemaQueries = parsedSchema.find((field) => field.name === docsQuery.Query);

  return (
    <Container sx={{ width: 300 }}>
      <DrawerHeader>
        <h2>{t('explorer.documentation')}</h2>
      </DrawerHeader>
      <Divider />
      {schemaQueries &&
        schemaQueries.args.map((name) => <ExplorerDocsQuery key={name.id} {...name} />)}
    </Container>
  );
};

interface IExplorerDocsQueriesProps {
  parsedSchema: ParserField[];
}

enum docsQuery {
  Query = 'Query',
}
