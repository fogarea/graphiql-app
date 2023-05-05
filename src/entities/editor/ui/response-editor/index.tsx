import { Card } from '@mui/material';
import CodeEditor from '@uiw/react-textarea-code-editor';

export const ResponseEditor = ({ json }: IResponseEditorProps) => {
  return (
    <Card variant="outlined">
      <CodeEditor
        readOnly={true}
        value={json}
        language="json"
        placeholder=""
        padding={15}
        minHeight={360}
        style={{
          fontSize: 14,
          backgroundColor: '#f5f5f5',
          fontFamily:
            'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
    </Card>
  );
};

interface IResponseEditorProps {
  json: string;
}
