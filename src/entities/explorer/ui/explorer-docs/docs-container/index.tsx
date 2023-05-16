import { Container } from '@mui/material';
import React from 'react';

export const ExplorerDocsContainer = ({ children }: IExplorerDocsContainerProps): JSX.Element => {
  return <Container sx={{ width: 300 }}>{children}</Container>;
};

interface IExplorerDocsContainerProps {
  children: React.ReactNode;
}
