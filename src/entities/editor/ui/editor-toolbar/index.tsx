import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import Grid from '@mui/material/Grid/Grid';
import { TooltipButton } from '@/shared/ui';

export const EditorToolbar = ({
  execQuery,
  prettifyQuery,
  copyQuery,
  cleanQuery,
}: IEditorToolbarProps): JSX.Element => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ width: '100%' }}
    >
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
        <ClearAllIcon />
      </TooltipButton>
    </Grid>
  );
};

interface IEditorToolbarProps {
  execQuery: () => void;
  prettifyQuery: () => void;
  copyQuery: () => void;
  cleanQuery: () => void;
}
