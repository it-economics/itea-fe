import { Card, CardContent, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../model/Product';

interface ProductTileProps {
  product: Product;
}

export const ProductTile: FC<ProductTileProps> = ({ product }) => {
  return (
    <Link
      to={`/product/details/${product.id}`}
      style={{ textDecoration: 'none' }}
    >
      <Card
        sx={(theme) => ({
          width: 320,
          padding: theme.spacing(),
          textAlign: 'center',
        })}
      >
        <Typography variant="h5">{product.name}</Typography>
        <img
          src={product.imageName}
          alt={product.name}
          style={{ maxWidth: '50%' }}
        />
        <CardContent>
          <Typography>{product.description}</Typography>
          <Typography>
            Price: <b>{product.price} &#8364;</b>
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
