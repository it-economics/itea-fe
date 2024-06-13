import { FC } from 'react';
import { useStoreProducts } from '../../contexts/StoreProductsContext';
import { Grid, Typography } from '@mui/material';
import { ShoppingCartTile } from './ShoppingCartTile';
import { ShoppingCartSum } from './ShoppingCartSum';

const ShoppingCart: FC = () => {
  const { cart, sum } = useStoreProducts();

  return (
    <Grid container spacing={5}>
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
        <Grid
          item
          xs={12}
          sx={() => ({
            textAlign: 'center',
          })}
        >
          <Typography>No products in the cart</Typography>
        </Grid>
      )}
      <Grid
        item
        xs={12}
        sx={(theme) => ({
          textAlign: 'right',
          px: theme.spacing(2),
        })}
      >
        <ShoppingCartSum sum={sum} />
      </Grid>
    </Grid>
  );
};

export default ShoppingCart;
