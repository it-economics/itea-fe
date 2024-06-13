import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

const enableMSW = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }
  const { worker } = await import('./mocks/browser');
  return worker.start();
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

enableMSW().then(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
