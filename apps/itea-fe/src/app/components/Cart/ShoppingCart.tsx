import {FC} from 'react';
import {useStoreProducts} from '../../contexts/StoreProductsContext';
import {Grid, Typography} from '@mui/material';
import {ShoppingCartTile} from './ShoppingCartTile';
import {ShoppingCartSum} from "./ShoppingCartSum";

const ShoppingCart: FC = () => {
  const {cart, sum} = useStoreProducts();

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
      <Grid sx={{
        bottom: 0,
        right: 100,
        width: '100%',
        height: 100,
        textAlign: 'right'
      }}>
        <ShoppingCartSum sum={sum}/>
      </Grid>
    </Grid>
  );
};

export default ShoppingCart;
