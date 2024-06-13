import { Box, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { ShoppingCartSum } from './ShoppingCartSum';
import { ShoppingCartTile } from './ShoppingCartTile';

export const ShoppingCart: FC = () => {
  const { cart, sum } = useShoppingCart();

  return (
    <Box sx={{ margin: '2rem' }}>
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
    </Box>
  );
};
