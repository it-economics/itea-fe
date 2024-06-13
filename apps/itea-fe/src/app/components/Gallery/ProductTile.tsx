import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { FC } from 'react';
import { Product } from '../../model/Product/Product';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@mui/icons-material';

interface ProductTileProps {
  product: Product;
}

export const ProductTile: FC<ProductTileProps> = ({ product }) => {
  return (
    <Link
      to={`/product/details/${product.id}`}
      style={{ textDecoration: 'none' }}
    >
      <Card sx={(theme) => ({ width: 320, padding: theme.spacing() })}>
        <Typography>{product.name}</Typography>

        <AspectRatio>
          <img
            src="../../../assets/images/pexels-colour-creation-28649-112811.jpg"
            loading="lazy"
            alt="../../../assets/images/pexels-colour-creation-28649-112811.jpg"
          />
        </AspectRatio>
        <CardContent>
          <Typography>{product.description}</Typography>
          <Typography>Price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {product.price}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
