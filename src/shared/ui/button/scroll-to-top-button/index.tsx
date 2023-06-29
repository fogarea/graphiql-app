import { KeyboardArrowUp } from '@mui/icons-material';
import { Box, Fab as MUIFab, Zoom, useScrollTrigger } from '@mui/material';
import styled from '@mui/material/styles/styled';
import { useCallback } from 'react';

export const ScrollToTopButton = ({
  title = 'Scroll back to top',
}: IScrollToTopButtonProps): JSX.Element => {
  const rootElement = document.getElementById('root') as HTMLDivElement;
  const trigger = useScrollTrigger({
    target: rootElement,
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollToTop = useCallback(() => {
    rootElement.scrollTo({ top: 0, behavior: 'smooth' });
  }, [rootElement]);

  return (
    <Zoom in={trigger}>
      <Wrapper role="presentation">
        <Fab
          onClick={scrollToTop}
          color="primary"
          size="small"
          aria-label="Scroll back to top"
          title={title}
        >
          <KeyboardArrowUp fontSize="medium" />
        </Fab>
      </Wrapper>
    </Zoom>
  );
};

interface IScrollToTopButtonProps {
  title?: string;
}

const Wrapper = styled(Box)(() => ({
  position: 'fixed',
  bottom: 70,
  right: 32,
  zIndex: 1,
}));

const Fab = styled(MUIFab)(() => ({
  opacity: 0.7,
}));
