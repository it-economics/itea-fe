import { FC } from 'react';
import { useStoreProducts } from '../../contexts/StoreProductsContext';
import { Box } from '@mui/material';
import { ProductTile } from '../Gallery/ProductTile';

const ShoppingCart: FC = () => {
  const { cart } = useStoreProducts();

  return (
    <>
      {cart.map((product) => (
        <Box>
          <ProductTile product={product} />
        </Box>
      ))}
    </>
  );
};

export default ShoppingCart;
