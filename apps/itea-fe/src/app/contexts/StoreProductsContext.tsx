import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import { Product } from '../model/Product/Product';
import { useGetProducts } from '../model/Product/hooks/useGetProducts';

type StoreProductsContextType = {
  products: Product[];
  isLoading: boolean;
  cart: Product[];
  sum: number;
  add2Cart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
};

const noop = () => {
  // dummy
};

const StoreProductsContext = createContext<StoreProductsContextType>({
  products: [],
  isLoading: false,
  cart: [],
  sum: 0,
  add2Cart: noop,
  removeFromCart: noop,
});

export const StoreProductsProvider: FC<PropsWithChildren> = ({ children }) => {
  const { data: products, isLoading } = useGetProducts();
  const [cart, setCart] = useState<Product[]>([]);

  const sum = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <StoreProductsContext.Provider
      value={{
        products: products || [],
        isLoading,
        cart,
        sum,
        add2Cart: (product) => setCart((prev) => [...prev, product]),
        removeFromCart: (productId) =>
          setCart((prev) => prev.filter((p) => p.id !== productId)),
      }}
    >
      {children}
    </StoreProductsContext.Provider>
  );
};

export const useStoreProducts = () => useContext(StoreProductsContext);
