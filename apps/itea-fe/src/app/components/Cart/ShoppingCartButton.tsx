import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton, Tooltip } from '@mui/material';
import { FC } from 'react';
import { useStoreProducts } from '../../contexts/StoreProductsContext';
import { NavLink } from 'react-router-dom';

export const ShoppingCartButton: FC = () => {
  const { cart } = useStoreProducts();

  return (
    <Tooltip title="Cart">
      <NavLink
        to="shopping-cart"
        style={{
          color: 'inherit',
        }}
      >
        <IconButton size="medium">
          <Badge badgeContent={cart.length} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </NavLink>
    </Tooltip>
  );
};
