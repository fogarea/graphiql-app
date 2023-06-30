import { SelectChangeEvent, MenuItem } from '@mui/material';
import { useEffect } from 'react';
import { useEditorStore } from '@/entities/editor';
import { EndpointsList, endpointsService } from '@/entities/endpoints';

const endpoints = endpointsService.getAll();

export const SelectEndpoint = () => {
  const [endpoint, setEndpoint] = useEditorStore((state) => [state.endpoint, state.setEndpoint]);

  const handleChange = (event: SelectChangeEvent) => {
    setEndpoint(event.target.value);
  };

  useEffect(() => {
    if (!endpoint) {
      setEndpoint(endpoints[0].url);
    }
  }, []);

  return (
    <EndpointsList value={endpoint} handleChange={handleChange}>
      {endpoints.map(({ id, url }) => (
        <MenuItem key={id} value={url}>
          {url}
        </MenuItem>
      ))}
    </EndpointsList>
  );
};
