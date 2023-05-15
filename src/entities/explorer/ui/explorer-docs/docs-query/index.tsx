import { ParserField } from 'graphql-js-tree';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const ExplorerDocsQuery = (props: ParserField): JSX.Element => {
  const fieldLink = props.type.fieldType.name
    ? `${props.type.fieldType.name}`
    : `[${props.type.fieldType.nest.name}]`;
  return (
    <div style={{ position: 'relative', cursor: 'pointer', marginBottom: 6 }}>
      <span>{props.name}</span>
      <span>{'(...): '}</span>
      <span>{fieldLink}</span>
      <ArrowRightIcon sx={{ position: 'absolute', right: 0 }} />
    </div>
  );
};
