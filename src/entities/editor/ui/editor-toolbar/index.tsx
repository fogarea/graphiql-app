import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { TooltipButton } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

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
        {isFetching ? <StopIcon color="error" /> : <PlayArrowIcon color="secondary" />}
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
