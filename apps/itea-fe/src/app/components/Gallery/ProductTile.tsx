import {Card, CardContent} from '@mui/material';
import Typography from '@mui/material/Typography';
import {FC} from 'react';
import {Product} from '../../model/Product/Product';
import {Link} from 'react-router-dom';
import {AspectRatio} from "@mui/icons-material";

interface ProductTileProps {
  product: Product;
}

export const ProductTile: FC<ProductTileProps> = ({ product }) => {
  return (
    <Link
      to={`/product/details/${product.id}`}
      style={{ textDecoration: 'none' }}
    >
      <Card sx={{ width: 320 }}>
        <div>
          <Typography level="title-lg">{product.name}</Typography>
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img
            src="../../../assets/images/pexels-colour-creation-28649-112811.jpg"
            loading="lazy"
            alt="../../../assets/images/pexels-colour-creation-28649-112811.jpg"
          />
        </AspectRatio>
        <CardContent orientation="horizontal">
          <div>
            <Typography level="body-xs">{product.description}</Typography>
            <Typography level="body-xs">Price:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              {product.price}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
