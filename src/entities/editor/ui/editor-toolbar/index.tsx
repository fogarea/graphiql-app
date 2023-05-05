import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { TooltipButton } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

export const EditorToolbar = ({
  execQuery,
  prettifyQuery,
  copyQuery,
  cleanQuery,
}: IEditorToolbarProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <TooltipButton title={t('button.execute-query')} onClick={execQuery}>
        <PlayArrowIcon />
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
  execQuery: () => void;
  prettifyQuery: () => void;
  copyQuery: () => void;
  cleanQuery: () => void;
}
