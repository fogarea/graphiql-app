import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const EditorPageButton = (): JSX.Element => (
  <Button color="inherit">
    <NavLink to="/editor">Go to Main Page</NavLink>
  </Button>
);
