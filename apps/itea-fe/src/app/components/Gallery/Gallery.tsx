import { CircularProgress, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { useGetProducts } from '../../model/Product/hooks/useGetProducts';
import { ProductTile } from './ProductTile';

export const Gallery: FC = () => {
  const { data: products, isLoading } = useGetProducts();

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid
      container
      spacing={5}
      direction="row"
      justifyContent="center"
      alignItems="center"
      paddingTop="2%"
    >
      {products ? (
        products.map((product) => (
          <Grid item xs={'auto'} key={product.id}>
            <ProductTile product={product} />
          </Grid>
        ))
      ) : (
        <Typography>No products</Typography>
      )}
    </Grid>
  );
};
