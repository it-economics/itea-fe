// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {FC, Suspense} from 'react';
import {Routing} from './Routing';
import {AppBootstrap, PortalAppProps} from "./AppBootstrap";

// TODO add error boundary
// TODO add proper loading

export const App: FC<PortalAppProps> = ({portalContext}) => {
  return (
    <AppBootstrap portalContext={portalContext}>
      <Suspense fallback={<span>Loading ...</span>}>
        <Routing/>
      </Suspense>
    </AppBootstrap>
  );
}

export default App;
