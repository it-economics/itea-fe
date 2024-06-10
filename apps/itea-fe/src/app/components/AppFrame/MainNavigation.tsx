import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const MainNavigation = () => {
  return (
    <NavLink
      to="gallery"
      style={{
        color: 'inherit',
    }}>
        {({ isActive }) => (
          <Box sx={{
            lineHeight: '64px',
            paddingLeft: '10px',
            paddingRight: '10px',
            backgroundColor: isActive ? 'rgba(255,255,255,0.3)' : 'transparent',
          }}>Gallery</Box>
        )}
      </NavLink>
  );
};
