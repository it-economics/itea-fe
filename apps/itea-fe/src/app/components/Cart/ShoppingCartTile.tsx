import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Button, Card, CardActions, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useStoreProducts } from '../../contexts/StoreProductsContext';
import { Product } from '../../model/Product/Product';

interface ProductTileProps {
  product: Product;
  quantity: number;
}

export const ShoppingCartTile: FC<ProductTileProps> = ({
  product,
  quantity,
}) => {
  const { removeFromCart } = useStoreProducts();

  return (
    <Card sx={(theme) => ({ width: 320, padding: theme.spacing() })}>
      <CardContent>
        <Typography variant="h5">{`${product.name}`}</Typography>
        {quantity > 1 && <Typography>Quantity: {quantity}</Typography>}
        <img
          src={product.imageName}
          alt={product.name}
          style={{ maxWidth: '100%' }}
        />
        <Typography>
          Price: <b>{product.price} &#8364;</b>
        </Typography>
      </CardContent>
      <CardActions>
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
      </CardActions>
    </Card>
  );
};
