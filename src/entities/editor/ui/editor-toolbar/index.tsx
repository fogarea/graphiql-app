import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { TooltipButton } from '@/shared/ui';

export const EditorToolbar = ({
  execQuery,
  prettifyQuery,
  copyQuery,
  cleanQuery,
}: IEditorToolbarProps): JSX.Element => {
  return (
    <>
      <TooltipButton title="Execute query" onClick={execQuery}>
        <PlayArrowIcon />
      </TooltipButton>
      <TooltipButton title="Prettify query" onClick={prettifyQuery}>
        <TextFormatIcon />
      </TooltipButton>
      <TooltipButton title="Copy query" onClick={copyQuery}>
        <ContentCopyIcon />
      </TooltipButton>
      <TooltipButton title="Clean query" onClick={cleanQuery}>
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
