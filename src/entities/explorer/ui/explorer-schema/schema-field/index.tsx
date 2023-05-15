import { ParserField } from 'graphql-js-tree';
import Grid from '@mui/material/Grid';

import styles from './styles.module.scss';

export const SchemaField = (props: ParserField) => {
  const { type, args } = props;
  return (
    <Grid container>
      <pre>
        <span className={styles.type}>{type.fieldType.name}</span>
        {/*  // проблема интерфейса, name существует */}
        <span> </span>
        <span className={styles.typeName}>{props.name}</span>
        <span>{` {`}</span>
        <pre style={{ margin: 0 }}>
          {args.length &&
            args.map((typeField) => (
              <pre style={{ margin: 5 }} key={typeField.id}>
                <span className={styles.typeField}>{`  ${typeField.name}:`}</span>
                {typeField.type.fieldType.name ? (
                  <span
                    className={styles.typeFieldType}
                  >{` ${typeField.type.fieldType.name}`}</span>
                ) : (
                  <span
                    className={styles.typeFieldType}
                  >{` [${typeField.type.fieldType.nest.name}]`}</span>
                )}
              </pre>
            ))}
        </pre>
        <span>{`}`}</span>
      </pre>
    </Grid>
  );
};
