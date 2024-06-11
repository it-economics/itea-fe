import { FC, PropsWithChildren } from 'react';
import {PaletteMode} from "@mui/material";
import {CustomThemeProvider} from "./styling";

export interface PortalAppProps {
  portalContext: PortalContext;
}

export interface PortalContext {
  basePath: string;
  themeOptions: {
    theme: PaletteMode;
    container?: HTMLDivElement;
  };
}

export const AppBootstrap: FC<Required<PropsWithChildren<PortalAppProps>>> = ({children, portalContext}) => (
  <CustomThemeProvider
    theme={portalContext.themeOptions.theme}
    container={portalContext.themeOptions.container!}
  >
    {children}
  </CustomThemeProvider>
);
