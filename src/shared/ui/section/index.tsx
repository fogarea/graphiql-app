import Container, { ContainerProps } from '@mui/material/Container';
import { Breakpoint } from '@mui/system/createTheme/createBreakpoints';

import { forwardRef, ReactNode } from 'react';

export const Section = forwardRef<HTMLDivElement, ISectionProps>(
  ({ children, disableGutters = false, maxWidth = 'xl' }: ISectionProps, ref): JSX.Element => {
    return (
      <Container component="section" ref={ref} disableGutters={disableGutters} maxWidth={maxWidth}>
        {children}
      </Container>
    );
  }
);

interface ISectionProps
  extends Pick<ContainerProps, Exclude<keyof ContainerProps, 'disableGutters, maxWidth'>> {
  children: ReactNode;
  disableGutters?: boolean;
  maxWidth?: Breakpoint | false;
}
