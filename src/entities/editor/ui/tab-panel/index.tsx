import { Box } from '@mui/material';
import { ComponentProps, ReactNode } from 'react';

export const EditorTabPanel = ({ children, value, index, ...rest }: IEditorTabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`editor-tabpanel-${index}`}
      aria-labelledby={`editor-tab-${index}`}
      style={{ height: '200px', overflow: 'auto' }}
      {...rest}
    >
      {value === index && <Box sx={{ p: '0 15px 15px' }}>{children}</Box>}
    </div>
  );
};

interface IEditorTabPanelProps extends ComponentProps<'div'> {
  index: number;
  value: number;
  children?: ReactNode;
}
