import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

export const EditorExpandMore = styled(({ expand, ...other }: IEditorExpandMoreProps) => {
  return <IconButton data-expand={expand} {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(180deg)' : 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface IEditorExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
