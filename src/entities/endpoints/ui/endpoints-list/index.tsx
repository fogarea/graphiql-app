import { SelectChangeEvent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ReactNode } from 'react';

import { a11yEditorEndpointFormControl } from '@/shared/lib/theme';

export const EndpointsList = ({ value, handleChange, children }: IEditorEndpointsListProps) => {
  return (
    <FormControl size="small" sx={{ ...a11yEditorEndpointFormControl() }}>
      <Select value={value} onChange={handleChange} autoWidth displayEmpty>
        {children}
      </Select>
    </FormControl>
  );
};

interface IEditorEndpointsListProps {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
  children: ReactNode;
}
