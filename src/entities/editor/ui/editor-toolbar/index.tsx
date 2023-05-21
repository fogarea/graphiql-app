import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import { useTranslation } from 'react-i18next';

import { TooltipButton } from '@/shared/ui';

export const EditorToolbar = ({
  isFetching,
  execQuery,
  prettifyQuery,
  copyQuery,
  cleanQuery,
}: IEditorToolbarProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <TooltipButton title={t('button.execute-query')} onClick={execQuery}>
        {isFetching ? <StopIcon color="error" /> : <PlayArrowIcon color="primary" />}
      </TooltipButton>
      <TooltipButton title={t('button.prettify-query')} onClick={prettifyQuery}>
        <TextFormatIcon />
      </TooltipButton>
      <TooltipButton title={t('button.copy-query')} onClick={copyQuery}>
        <ContentCopyIcon />
      </TooltipButton>
      <TooltipButton title={t('button.clean-query')} onClick={cleanQuery}>
        <DeleteOutlinedIcon />
      </TooltipButton>
    </>
  );
};

interface IEditorToolbarProps {
  isFetching: boolean;
  execQuery: () => void;
  prettifyQuery: () => void;
  copyQuery: () => void;
  cleanQuery: () => void;
}
