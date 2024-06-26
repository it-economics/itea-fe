import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, Suspense } from 'react';
import { Routing } from './Routing';

import { Box, CircularProgress } from '@mui/material';
import { StoreProductsProvider } from './product';
import { ThemeContextProvider } from './theme';
import { ShoppingCartContextProvider } from './shopping-cart';

export const App: FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <Suspense fallback={<AppLoading />}>
          <StoreProductsProvider>
            <ShoppingCartContextProvider>
              <Routing />
            </ShoppingCartContextProvider>
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
