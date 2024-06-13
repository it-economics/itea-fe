// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, Suspense } from 'react';
import { Routing } from './Routing';
import { AppBootstrap, PortalAppProps } from './AppBootstrap';
import { ThemeContextProvider } from './components/Theme';
import { Box, CircularProgress } from '@mui/material';

// TODO add error boundary
// TODO add proper loading

export const App: FC<PortalAppProps> = ({ portalContext }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppBootstrap portalContext={portalContext}>
        <ThemeContextProvider>
          <Suspense fallback={<AppLoading />}>
            <Routing />
          </Suspense>
        </ThemeContextProvider>
      </AppBootstrap>
    </QueryClientProvider>
  );
};

const AppLoading = () => (
  <Box
    style={{
      height: '100%',
      width: '100%',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <CircularProgress />
  </Box>
);

export default App;
