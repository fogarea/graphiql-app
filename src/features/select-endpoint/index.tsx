import { SelectChangeEvent, MenuItem } from '@mui/material';
import { useEffect } from 'react';
import { EditorEndpointsList, endpointsService, useEndpoint } from '@/entities/editor';
import { useDocsReset } from '@/entities/explorer';

const endpoints = endpointsService.getAll();

export const SelectEndpoint = () => {
  const { endpoint, setEndpoint } = useEndpoint();
  const [resetParsedSchema] = useDocsReset();

  const handleChange = (event: SelectChangeEvent) => {
    setEndpoint(event.target.value);
    resetParsedSchema();
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
