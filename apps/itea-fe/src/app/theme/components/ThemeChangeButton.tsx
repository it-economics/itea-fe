import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton, Tooltip } from '@mui/material';
import { useThemeContext } from '../context/ThemeContext';

export const ThemeChangeButton = () => {
  const { isDark, toggleTheme } = useThemeContext();
  return (
    <Tooltip title="Toggle theme">
      <IconButton size="medium" onClick={() => toggleTheme()}>
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
};
