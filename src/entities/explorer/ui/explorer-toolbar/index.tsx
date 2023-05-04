import BookIcon from '@mui/icons-material/Book';
import Grid from '@mui/material/Grid/Grid';
import { TooltipButton } from '@/shared/ui';

export const ExplorerToolbar = ({ toggleDocumentation }: IEditorToolbarProps): JSX.Element => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ width: '100%' }}
    >
      <TooltipButton title="Documentation" onClick={toggleDocumentation}>
        <BookIcon />
      </TooltipButton>
    </Grid>
  );
};

interface IEditorToolbarProps {
  toggleDocumentation: () => void;
}
