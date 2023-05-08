import CodeEditor from '@uiw/react-textarea-code-editor';

import { a11yCodeEditorStyles } from '@/shared/theme';

export const ResponseEditor = ({ json }: IResponseEditorProps) => {
  return (
    <CodeEditor
      readOnly={true}
      value={json}
      language="json"
      padding={15}
      {...a11yCodeEditorStyles({ backgroundColor: '#f5f5f5' })}
    />
  );
};

interface IResponseEditorProps {
  json: string;
}
