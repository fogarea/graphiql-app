import { ParserField } from 'graphql-js-tree';
import { SchemaField } from '../schema-field';

export const ExplorerSchemaBlock = ({ schemaField }: IExplorerSchemaBlockProps): JSX.Element => {
  console.log('schemaField', schemaField);
  return (
    <div>
      {schemaField.map((el) => (
        <SchemaField key={el.id} {...el} />
      ))}
    </div>
  );
};

interface IExplorerSchemaBlockProps {
  schemaField: ParserField[];
}
