// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Suspense } from 'react';
import { Routing } from './Routing';

// TODO add error boundary
// TODO add proper loading

export function App() {
  return (
    <Suspense fallback={<span>Loading ...</span>}>
      <Routing />
    </Suspense>
  );
}

export default App;
