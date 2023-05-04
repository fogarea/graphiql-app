import { Card } from '@mui/material';
import CodeEditor from '@uiw/react-textarea-code-editor';

export const QueryEditor = ({ code, setCode }: IQueryEditorProps) => {
  return (
    <Card variant="outlined">
      <CodeEditor
        value={code}
        language="graphql"
        placeholder="Please enter GraphQL query."
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        minHeight={360}
        style={{
          fontSize: 14,
          backgroundColor: '#fff',
          fontFamily:
            'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
    </Card>
  );
};

interface IQueryEditorProps {
  code: string;
  setCode: (value: string) => void;
}
