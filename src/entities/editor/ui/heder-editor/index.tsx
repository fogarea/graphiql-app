import CodeEditor from '@uiw/react-textarea-code-editor';

import { a11yCodeEditorStyles } from '@/shared/theme';

export const HeaderEditor = ({ code, setCode }: IHeaderEditorProps) => {
  return (
    <CodeEditor
      value={code}
      language="json"
      onChange={(evn) => setCode(evn.target.value)}
      padding={0}
      {...a11yCodeEditorStyles()}
    />
  );
};

interface IHeaderEditorProps {
  code: string;
  setCode: (value: string) => void;
}
