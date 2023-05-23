import { useEffect, useState } from 'react';

import {
  IDocsTypeDetails,
  ITypeArguments,
  getQueryInfo,
  getTypeDetails,
  useExplorer,
} from '@/entities/explorer';

export const ExplorerFieldInfo = ({ typeDetails }: IDocsTypeDetails): JSX.Element => {
  const { parsedSchema } = useExplorer();
  const [docsDetails, setDocsDetails] = useState<ITypeArguments[]>([]);
  const queryInfo = getQueryInfo(typeDetails);
  console.log('queryInfo', queryInfo);

  useEffect(() => {
    const findQuery = parsedSchema.find((el) => el.name === queryInfo.name);
    console.log('findQuery', findQuery);
    if (findQuery) {
      const details = getTypeDetails(findQuery);
      const isValidDetails = details?.every((el): el is ITypeArguments => {
        return el !== undefined && typeof el.name === 'string' && typeof el.type === 'string';
      });
      if (isValidDetails) setDocsDetails(details);
    } else {
      setDocsDetails([]);
    }
  }, [queryInfo.name, parsedSchema]);

  return (
    <div style={{ width: 300 }}>
      <pre>
        <span>{typeDetails.name}: </span>
        <span>{queryInfo.name}</span>
      </pre>
      <p>{typeDetails.description}</p>
      {!!docsDetails.length && (
        <div>
          <span>{'type '}</span>
          <span>{'{'}</span>
          {docsDetails.map((el) => (
            <pre key={el.name}>
              <span>{el.name}: </span>
              <span>{el.type}</span>
            </pre>
          ))}
          <span>{'}'}</span>
        </div>
      )}
    </div>
  );
};
