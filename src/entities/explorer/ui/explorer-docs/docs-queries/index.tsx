import { ParserField } from 'graphql-js-tree';

import { ExplorerDocsQuery } from '@/entities/explorer';

export const ExplorerDocsQueries = ({ parsedSchema }: IExplorerDocsQueriesProps): JSX.Element => {
  const schemaQueries = parsedSchema.find((field) => field.name === docsQuery.Query);

  return (
    <div>
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
