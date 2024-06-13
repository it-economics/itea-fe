import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, Suspense } from 'react';
import { Routing } from './Routing';
import { AppBootstrap, PortalAppProps } from './AppBootstrap';
import { ThemeContextProvider } from './components/Theme';
import { Box, CircularProgress } from '@mui/material';
import { StoreProductsProvider } from './contexts/StoreProductsContext';

export const App: FC<PortalAppProps> = ({ portalContext }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppBootstrap portalContext={portalContext}>
        <ThemeContextProvider>
          <Suspense fallback={<AppLoading />}>
            <StoreProductsProvider>
              <Routing />
            </StoreProductsProvider>
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
