import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import { Product } from '../../product';

type CartItem = {
  product: Product;
  quantity: number;
};

type ShoppingCartContextType = {
  cart: CartItem[];
  sum: number;
  add2Cart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
};

const noop = () => {
  // dummy
};

const ShoppingCartContext = createContext<ShoppingCartContextType>({
  cart: [],
  sum: 0,
  add2Cart: noop,
  removeFromCart: noop,
});

export const ShoppingCartContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const sum = cart.reduce(
    (acc, item) => acc + item.quantity * item.product.price,
    0
  );

  return (
    <ShoppingCartContext.Provider
      value={{
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
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);
