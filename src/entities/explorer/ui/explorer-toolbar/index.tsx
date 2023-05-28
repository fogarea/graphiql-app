import BookIcon from '@mui/icons-material/Book';
import { useTranslation } from 'react-i18next';
import { TooltipButton } from '@/shared/ui';

export const ExplorerToolbar = ({ toggleDocumentation }: IEditorToolbarProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <TooltipButton title={t('button.documentation')} onClick={toggleDocumentation} color="primary">
      <BookIcon />
    </TooltipButton>
  );
};

interface IEditorToolbarProps {
  toggleDocumentation: () => void;
}
