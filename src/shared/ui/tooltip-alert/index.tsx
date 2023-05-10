import Box from '@mui/material/Box';

export const TooltipAlert = ({ message }: ITooltipAlertProps) => {
  return (
    <Box
      width={160}
      sx={{
        bgcolor: '#fff',
        color: 'grey.600',
        border: '1px solid',
        borderColor: 'grey.300',
        p: '8px 16px',
        borderRadius: 1,
        display: 'inline-block',
        fontSize: '0.875rem',
        fontWeight: '500',
        position: 'absolute',
        top: '40%',
        textAlign: 'center',
        left: 'calc(50% - 80px)',
        zIndex: 'tooltip',
      }}
    >
      {message}
    </Box>
  );
};

interface ITooltipAlertProps {
  message: string;
}
