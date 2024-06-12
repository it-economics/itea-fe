// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {FC, Suspense} from 'react';
import {Routing} from './Routing';
import {AppBootstrap, PortalAppProps} from "./AppBootstrap";
import {ThemeContextProvider} from "./components/Theme";

// TODO add error boundary
// TODO add proper loading

export const App: FC<PortalAppProps> = ({portalContext}) => {
  return (
    <AppBootstrap portalContext={portalContext}>
      <ThemeContextProvider>
      <Suspense fallback={<span>Loading ...</span>}>
        <Routing/>
      </Suspense>
      </ThemeContextProvider>
    </AppBootstrap>
  );
}

export default App;
