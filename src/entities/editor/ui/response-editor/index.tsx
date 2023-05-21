import grey from '@mui/material/colors/grey';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useTranslation } from 'react-i18next';

import { a11yCodeEditorStyles } from '@/shared/theme';
import { TooltipAlert } from '@/shared/ui';

export const ResponseEditor = ({ isFetching, json }: IResponseEditorProps) => {
  const { t } = useTranslation();

  const bgColor = isFetching ? grey[400] : grey[100];

  return (
    <>
      {isFetching && <TooltipAlert message={t('response.loading')} />}
      <CodeEditor
        readOnly={true}
        value={json}
        language="json"
        padding={15}
        {...a11yCodeEditorStyles({ backgroundColor: bgColor })}
      />
    </>
  );
};

interface IResponseEditorProps {
  isFetching: boolean;
  json: string;
}
