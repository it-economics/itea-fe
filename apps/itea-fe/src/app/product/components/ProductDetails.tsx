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
import { useProduct } from '../hooks/useProducts';

const ProductDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { add2Cart } = useStoreProducts();

  const { data: product, isLoading } = useProduct(id || '');

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
      {isLoading || !product ? (
        <CircularProgress />
      ) : (
        <Card sx={(theme) => ({ width: 320, padding: theme.spacing() })}>
          <Typography variant="h5">{product.name}</Typography>

          <img
            src={product.imageName}
            alt={product.name}
            style={{ maxWidth: '100%' }}
          />

          <CardContent>
            <Typography>{product.description}</Typography>
            <Typography>
              Price: <b>{product.price} &#8364;</b>
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

export default ProductDetails;
