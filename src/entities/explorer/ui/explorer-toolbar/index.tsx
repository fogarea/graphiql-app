import BookIcon from '@mui/icons-material/Book';
import { TooltipButton } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

export const ExplorerToolbar = ({
  toggleDocumentation,
  isDisabled,
}: IEditorToolbarProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <TooltipButton
      isDisabled={false || isDisabled}
      title={t('button.documentation')}
      onClick={toggleDocumentation}
    >
      <BookIcon />
    </TooltipButton>
  );
};

interface IEditorToolbarProps {
  toggleDocumentation: () => void;
  isDisabled?: boolean;
}
