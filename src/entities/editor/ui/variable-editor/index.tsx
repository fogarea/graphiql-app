import CodeEditor from '@uiw/react-textarea-code-editor';
import { useEffect, useRef } from 'react';

import { a11yCodeEditorStyles } from '@/shared/lib/theme';
import { useEditorFocus } from '../../hooks';

export const VariableEditor = ({ code, setCode }: IVariableEditorProps) => {
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const { onFocus } = useEditorFocus();

  useEffect(() => {
    editorRef.current?.focus();
  }, []);

  return (
    <CodeEditor
      ref={editorRef}
      onFocus={onFocus}
      value={code}
      language="json"
      onChange={(evn) => setCode(evn.target.value)}
      padding={0}
      {...a11yCodeEditorStyles()}
    />
  );
};

interface IVariableEditorProps {
  code: string;
  setCode: (value: string) => void;
}
