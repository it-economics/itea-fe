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
        cart.map((product) => (
          <Grid item>
            <ShoppingCartTile product={product} key={product.id} />
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
