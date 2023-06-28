import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { GRAPHQL_API_ENDPOINT } from '@/shared/config';

export const EditorEndpoint = (): JSX.Element => {
  return (
    <FormControl size="small" sx={{ my: 2, minWidth: 80, maxWidth: { lg: '100%', xs: 288 } }}>
      <Select
        value=""
        autoWidth
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        disabled
      >
        <MenuItem value="">{GRAPHQL_API_ENDPOINT}</MenuItem>
      </Select>
    </FormControl>
  );
};
