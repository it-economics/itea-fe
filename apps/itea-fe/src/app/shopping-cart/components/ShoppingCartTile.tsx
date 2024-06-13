import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { Tile } from '../../common';
import { Product } from '../../product';
import { useShoppingCart } from '../context/ShoppingCartContext';

interface ProductTileProps {
  product: Product;
  quantity: number;
}

export const ShoppingCartTile: FC<ProductTileProps> = ({
  product,
  quantity,
}) => {
  const { removeFromCart } = useShoppingCart();

  return (
    <Tile
      title={product.name}
      actions={
        <Button
          variant="contained"
          size="medium"
          color="primary"
          aria-label="Remove from Cart"
          onClick={() => removeFromCart(product.id)}
          startIcon={<RemoveShoppingCartIcon />}
        >
          Remove from Cart
        </Button>
      }
    >
      <img
        src={product.imageName}
        alt={product.name}
        style={{ maxWidth: '50%' }}
      />
      <Typography>
        Price: <b>{product.price} &#8364;</b>
      </Typography>
      {quantity > 1 && <Typography>Quantity: {quantity}</Typography>}
    </Tile>
  );
};
