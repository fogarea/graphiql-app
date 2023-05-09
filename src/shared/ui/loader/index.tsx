import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export const Loader = (): JSX.Element => {
  return (
    <Backdrop
      open={true}
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        zIndex: 'drawer',
      }}
    >
      <CircularProgress
        sx={{
          color: (theme) => theme.palette.primary.dark,
        }}
      />
    </Backdrop>
  );
};
