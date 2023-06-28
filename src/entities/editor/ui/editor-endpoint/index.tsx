import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { GRAPHQL_API_ENDPOINT } from '@/shared/config';
import { a11yEditorEndpointFormControl } from '@/shared/lib/theme';

export const EditorEndpoint = (): JSX.Element => {
  return (
    <FormControl size="small" sx={{ ...a11yEditorEndpointFormControl() }}>
      <Select value="" autoWidth displayEmpty disabled>
        <MenuItem value="">{GRAPHQL_API_ENDPOINT}</MenuItem>
      </Select>
    </FormControl>
  );
};
