import { ParserField } from 'graphql-js-tree';
import Grid from '@mui/material/Grid';

export const SchemaField = (props: ParserField) => {
  return (
    <Grid container>
      <pre>
        <span>{props.type.fieldType.type}</span>
        <span> </span>
        <span>{props.name}</span>
      </pre>
    </Grid>
  );
};
