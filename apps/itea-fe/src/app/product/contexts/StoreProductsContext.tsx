import { FC, PropsWithChildren, createContext, useContext } from 'react';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../model/Product';

type StoreProductsContextType = {
  products: Product[];
  isLoading: boolean;
};

const StoreProductsContext = createContext<StoreProductsContextType>({
  products: [],
  isLoading: false,
});

export const StoreProductsProvider: FC<PropsWithChildren> = ({ children }) => {
  const { data: products, isLoading } = useProducts();

  return (
    <StoreProductsContext.Provider
      value={{
        products: products || [],
        isLoading,
      }}
    >
      {children}
    </StoreProductsContext.Provider>
  );
};

export const useStoreProducts = () => useContext(StoreProductsContext);
