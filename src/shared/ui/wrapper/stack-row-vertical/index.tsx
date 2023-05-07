import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { ReactNode } from 'react';

export const StackRowVertical = ({ children }: IStackRowVerticalProps): JSX.Element => {
  return (
    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
      {children}
    </Stack>
  );
};

interface IStackRowVerticalProps {
  children?: ReactNode;
}
