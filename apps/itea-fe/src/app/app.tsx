import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, Suspense } from 'react';
import { Routing } from './Routing';

import { Box, CircularProgress } from '@mui/material';
import { StoreProductsProvider } from './contexts/StoreProductsContext';
import { ThemeContextProvider } from './theme';

export const App: FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <Suspense fallback={<AppLoading />}>
          <StoreProductsProvider>
            <Routing />
          </StoreProductsProvider>
        </Suspense>
      </ThemeContextProvider>
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
