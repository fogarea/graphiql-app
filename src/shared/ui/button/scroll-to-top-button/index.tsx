import { KeyboardArrowUp } from '@mui/icons-material';
import { Box, Fab, Zoom } from '@mui/material';
import { useCallback } from 'react';

import { useScrollTrigger } from '@/shared/lib/hooks';

export const ScrollToTopButton = ({
  title = 'Scroll back to top',
}: IScrollToTopButtonProps): JSX.Element => {
  const { trigger, target } = useScrollTrigger(document.getElementById('root') as HTMLDivElement);

  const scrollToTop = useCallback(() => {
    target.scrollTo({ top: 0, behavior: 'smooth' });
  }, [target]);

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
