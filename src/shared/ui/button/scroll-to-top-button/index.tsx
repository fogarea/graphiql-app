import { KeyboardArrowUp } from '@mui/icons-material';
import { Box, Fab, Zoom, useScrollTrigger } from '@mui/material';
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
      <Box
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 70,
          right: 32,
          zIndex: 1,
        }}
      >
        <Fab
          onClick={scrollToTop}
          color="primary"
          size="small"
          aria-label="Scroll back to top"
          title={title}
          sx={{ opacity: 0.7 }}
        >
          <KeyboardArrowUp fontSize="medium" />
        </Fab>
      </Box>
    </Zoom>
  );
};

interface IScrollToTopButtonProps {
  title?: string;
}
