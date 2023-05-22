import { IDocsTypeDetails, getQueryValue } from '@/entities/explorer';

export const ExplorerFieldInfo = ({ typeDetails }: IDocsTypeDetails): JSX.Element => {
  const typeValue = getQueryValue(typeDetails);
  return (
    <div style={{ width: 300 }}>
      <pre>
        <span>{typeDetails.name}: </span>
        <span>{typeValue}</span>
      </pre>
      <p>{typeDetails.description}</p>
    </div>
  );
};
