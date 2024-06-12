import {IconButton, Tooltip} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import * as React from "react";
import {useThemeContext} from "./ThemeContext";

export const ThemeChangeButton = () => {
  const { isDark, toggleTheme } = useThemeContext();
  return (
  <Tooltip title="Toggle theme">
    <IconButton size="small" onClick={() => toggleTheme()}>
      {isDark ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  </Tooltip>
)}
