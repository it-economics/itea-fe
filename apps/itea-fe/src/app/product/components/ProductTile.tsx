import { Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Tile } from '../../common';
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
      <Tile title={product.name}>
        <img
          src={product.imageName}
          alt={product.name}
          style={{ maxWidth: '50%' }}
        />
        <Typography>{product.description}</Typography>
        <Typography>
          Price: <b>{product.price} &#8364;</b>
        </Typography>
      </Tile>
    </Link>
  );
};
