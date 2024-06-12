import { Card, CardContent, CardHeader, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { Product } from '../../model/Product/Product';
import { Link } from 'react-router-dom';

interface ProductTileProps {
  product: Product;
}

export const ProductTile: FC<ProductTileProps> = ({ product }) => {
  return (
    <Link
      to={`/product/details/${product.id}`}
      style={{ textDecoration: 'none' }}
    >
      <Card>
        <CardHeader title={product.name} />
        <CardMedia
          component="img"
          height="194"
          src={product.imageName} //todo use it to get image
          alt="Concert"
        />
        <CardContent>
          <Typography>{product.description}</Typography>
          <Typography>
            <strong>Price: {product.price}</strong>
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
