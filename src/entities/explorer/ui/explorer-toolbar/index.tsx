import BookIcon from '@mui/icons-material/Book';
import { TooltipButton } from '@/shared/ui';

export const ExplorerToolbar = ({ toggleDocumentation }: IEditorToolbarProps): JSX.Element => {
  return (
    <TooltipButton title="Documentation" onClick={toggleDocumentation}>
      <BookIcon />
    </TooltipButton>
  );
};

interface IEditorToolbarProps {
  toggleDocumentation: () => void;
}
