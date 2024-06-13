import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton, Tooltip } from '@mui/material';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

export const ShoppingCartButton: FC = () => {
  const { cart } = useShoppingCart();

  const cartItemsCount = cart.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0
  );

  return (
    <Tooltip title="Cart">
      <NavLink
        to="shopping-cart"
        style={{
          color: 'inherit',
        }}
      >
        <IconButton size="medium">
          <Badge badgeContent={cartItemsCount} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </NavLink>
    </Tooltip>
  );
};
