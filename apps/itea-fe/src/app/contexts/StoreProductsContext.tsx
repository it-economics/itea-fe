import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import { Product } from '../model/Product/Product';
import { useGetProducts } from '../model/Product/hooks/useGetProducts';

type CartItem = {
  product: Product;
  quantity: number;
};

type StoreProductsContextType = {
  products: Product[];
  isLoading: boolean;
  cart: CartItem[];
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
  const [cart, setCart] = useState<CartItem[]>([]);

  const sum = cart.reduce((acc, item) => acc + item.product.price, 0);

  return (
    <StoreProductsContext.Provider
      value={{
        products: products || [],
        isLoading,
        cart,
        sum,
        add2Cart: (product) =>
          setCart((prev) => {
            const existing = prev.find(
              (cartItem) => cartItem.product.id === product.id
            );
            if (existing) {
              return prev.map((cartItem) =>
                cartItem.product.id === product.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              );
            }
            return [...prev, { product, quantity: 1 }];
          }),
        removeFromCart: (productId) => {
          setCart((prev) =>
            prev.filter((cartItem) => cartItem.product.id !== productId)
          );
        },
      }}
    >
      {children}
    </StoreProductsContext.Provider>
  );
};

export const useStoreProducts = () => useContext(StoreProductsContext);
