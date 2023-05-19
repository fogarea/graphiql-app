import Grid from '@mui/material/Grid';

import {
  ExplorerDocsArguments,
  getQueryValue,
  IDocsTypeArguments as IExplorerDocsExampleProps,
} from '@/entities/explorer/';

export const ExplorerDocsExample = ({ typeArguments }: IExplorerDocsExampleProps) => {
  const detailsName = getQueryValue(typeArguments);
  return (
    <Grid item>
      <pre>
        <span>{typeArguments.name}</span>
        <span>{'('}</span>
      </pre>
      <pre>{typeArguments && <ExplorerDocsArguments typeArguments={typeArguments} />}</pre>
      <pre>
        <span>{'): '}</span>
        <span>{detailsName}</span>
      </pre>
    </Grid>
  );
};
