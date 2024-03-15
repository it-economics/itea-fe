import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const MainNavigation = () => {
  return (
    <>
      <NavLink to="gallery">
        {({ isActive }) => (
          <Box sx={{ fontWeight: isActive ? 'bold' : 'normal' }}>Gallery</Box>
        )}
      </NavLink>
    </>
  );
};
