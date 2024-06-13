import { FC } from 'react';
import { useStoreProducts } from '../../contexts/StoreProductsContext';
import { Grid, Typography } from '@mui/material';
import { ShoppingCartTile } from './ShoppingCartTile';

const ShoppingCart: FC = () => {
  const { cart } = useStoreProducts();

  return (
    <Grid
      container
      spacing={5}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2%',
      }}
    >
      {cart.length ? (
        cart.map((cartItem) => (
          <Grid item key={cartItem.product.id}>
            <ShoppingCartTile
              product={cartItem.product}
              quantity={cartItem.quantity}
              key={cartItem.product.id}
            />
          </Grid>
        ))
      ) : (
        <Grid item>
          <Typography>No products in the cart</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default ShoppingCart;
