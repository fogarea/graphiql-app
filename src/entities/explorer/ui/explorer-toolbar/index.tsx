import BookIcon from '@mui/icons-material/Book';
import { TooltipButton } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

export const ExplorerToolbar = ({ toggleDocumentation }: IEditorToolbarProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <TooltipButton title={t('button.documentation')} onClick={toggleDocumentation}>
      <BookIcon />
    </TooltipButton>
  );
};

interface IEditorToolbarProps {
  toggleDocumentation: () => void;
}
