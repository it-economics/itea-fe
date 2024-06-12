import {FC} from 'react';
import {useStoreProducts} from '../../contexts/StoreProductsContext';
import {Grid} from '@mui/material';
import {ShoppingCartTile} from "./ShoppingCartTile";

const ShoppingCart: FC = () => {
  const { cart } = useStoreProducts();

  return (
    <>
      {cart.map((product) => (
        <Grid container spacing={20}
              direction="row"
              justifyContent="center"
              alignItems="center"
              paddingTop='2%'
        >
          <ShoppingCartTile product={product} />
        </Grid>
      ))}
    </>
  );
};

export default ShoppingCart;
