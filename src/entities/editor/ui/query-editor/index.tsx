import CodeEditor from '@uiw/react-textarea-code-editor';
import { useTranslation } from 'react-i18next';

import { a11yCodeEditorStyles } from '@/shared/theme';

export const QueryEditor = ({ code, setCode }: IQueryEditorProps) => {
  const { t } = useTranslation();

  return (
    <CodeEditor
      value={code}
      language="graphql"
      placeholder={t('editor.placeholder')}
      onChange={(evn) => setCode(evn.target.value)}
      padding={15}
      {...a11yCodeEditorStyles()}
    />
  );
};

interface IQueryEditorProps {
  code: string;
  setCode: (value: string) => void;
}
