import Grid from '@mui/material/Grid';

import styles from './styles.module.scss';
import { IDocsTypeInfo } from '@/entities/explorer';

export const ExplorerDocsDetails = ({ typeDetails, typeArguments }: IDocsTypeInfo) => {
  return (
    <Grid container sx={{ borderLeft: 1, paddingLeft: 3, flexDirection: 'column' }}>
      <Grid item>
        <h2>Type Details</h2>
      </Grid>
      <Grid item>
        <pre>
          <span className={styles.type}>{typeDetails.type.fieldType.name}</span>
          {/*  // проблема интерфейса, name существует */}
          <span> </span>
          <span className={styles.typeName}>{typeDetails.name}</span>
          <span>{` {`}</span>
          <pre style={{ margin: 0 }}>
            {typeDetails.args.length &&
              typeDetails.args.map((typeField) => (
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
      {typeArguments && (
        <>
          <Grid item>
            <h2>Type Arguments</h2>
          </Grid>
          <Grid item>
            {typeArguments.args.map((typeArgument) => (
              <pre key={typeArgument.id}>
                <span>{`${typeArgument.name}: `}</span>
                <span>{`${
                  typeArgument.type.fieldType.name || typeArgument.type.fieldType.nest.name
                }`}</span>
              </pre>
            ))}
          </Grid>
        </>
      )}
    </Grid>
  );
};
