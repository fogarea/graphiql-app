import { useEffect, useRef } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

import { a11yCodeEditorStyles } from '@/shared/theme';

export const HeaderEditor = ({ code, setCode }: IHeaderEditorProps) => {
  const editorRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    editorRef.current?.focus();
  }, []);

  return (
    <CodeEditor
      ref={editorRef}
      onFocus={(e) =>
        e.currentTarget.setSelectionRange(
          e.currentTarget.value.length,
          e.currentTarget.value.length
        )
      }
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
