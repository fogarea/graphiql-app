import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { ParserField } from 'graphql-js-tree';

import { getTypeArguments, ITypeArguments } from '@/entities/explorer';

export const ExplorerDocsArguments = ({
  typeArguments,
}: IExplorerDocsArgumentsProps): JSX.Element => {
  const [docsArguments, setDocsArguments] = useState<ITypeArguments[]>([]);

  useEffect(() => {
    const docs = getTypeArguments(typeArguments);
    const isValidDocs = docs?.every((el): el is ITypeArguments => {
      return el !== undefined && typeof el.name === 'string' && typeof el.type === 'string';
    });
    if (isValidDocs) setDocsArguments(docs);
  }, [typeArguments]);

  return (
    <Grid item>
      {docsArguments &&
        docsArguments.map((el) => (
          <pre key={el.name}>
            <span>{el.name}: </span>
            <span>{el.type}</span>
          </pre>
        ))}
    </Grid>
  );
};

interface IExplorerDocsArgumentsProps {
  typeArguments: ParserField;
}
