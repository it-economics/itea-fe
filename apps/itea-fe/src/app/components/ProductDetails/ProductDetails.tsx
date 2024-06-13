import { AspectRatio } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useStoreProducts } from '../../contexts/StoreProductsContext';
import { useGetProduct } from '../../model/Product/hooks/useGetProducts';

export const ProductDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { add2Cart } = useStoreProducts();

  const { data: product, isLoading } = useGetProduct(id || '');

  return (
    <Box
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Card sx={(theme) => ({ width: 320, padding: theme.spacing() })}>
          <Typography>{product?.name}</Typography>
          <AspectRatio>
            <img
              src={product?.imageName ?? ''}
              srcSet={product?.imageName ?? ''}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <CardContent>
            <Typography>{product?.description}</Typography>
            <Typography>Price:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              {product?.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="medium"
              color="primary"
              startIcon={<AddShoppingCartIcon />}
              aria-label="Add to Cart"
              sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
              onClick={() => {
                if (product) {
                  add2Cart(product);
                }
              }}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      )}
    </Box>
  );
};
