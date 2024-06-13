import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Box, Button, CircularProgress } from '@mui/material';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Tile } from '../../common';
import { useShoppingCart } from '../../shopping-cart';
import { useProduct } from '../hooks/useProducts';

const ProductDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { add2Cart } = useShoppingCart();

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
        <Tile
          title={product.name}
          actions={
            <Button
              variant="contained"
              size="medium"
              color="primary"
              startIcon={<AddShoppingCartIcon />}
              aria-label="Add to Cart"
              onClick={() => {
                if (product) {
                  add2Cart(product);
                }
              }}
            >
              Add to Cart
            </Button>
          }
        >
          <img
            src={product.imageName}
            alt={product.name}
            style={{ maxWidth: '100%' }}
          />

          <Typography>{product.description}</Typography>
          <Typography>
            Price: <b>{product.price} &#8364;</b>
          </Typography>
        </Tile>
      )}
    </Box>
  );
};

export default ProductDetails;
