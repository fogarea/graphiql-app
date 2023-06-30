import { SelectChangeEvent, MenuItem } from '@mui/material';
import { useEffect } from 'react';
import { EditorEndpointsList, endpointsService, useEndpoint } from '@/entities/editor';

const endpoints = endpointsService.getAll();

export const SelectEndpoint = () => {
  const { endpoint, setEndpoint } = useEndpoint();

  const handleChange = (event: SelectChangeEvent) => {
    setEndpoint(event.target.value);
  };

  useEffect(() => {
    if (!endpoint) {
      setEndpoint(endpoints[0].url);
    }
  }, []);

  return (
    <EditorEndpointsList value={endpoint} handleChange={handleChange}>
      {endpoints.map(({ id, url }) => (
        <MenuItem key={id} value={url}>
          {url}
        </MenuItem>
      ))}
    </EditorEndpointsList>
  );
};
