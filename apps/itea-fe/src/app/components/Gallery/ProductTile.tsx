import {FC} from 'react';
import {Card, CardContent, CardHeader, CardMedia} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {Product} from "../../model/Product";
import Typography from "@mui/material/Typography";

interface ProductTileProps {
  product: Product;
}

export const ProductTile: FC<ProductTileProps> = ({product}) => {

  const navigate = useNavigate()

  return (
    <Card onClick={() => navigate(`product/details/${product.id}`)}>
      <CardHeader
        title={product.name}
      />
      <CardMedia
        component="img"
        height="194"
        src={product.imageUrl}
        alt="Concert"
      />
      <CardContent>
      <Typography>{product.description}</Typography>
      <Typography><strong>Price: {product.price}</strong></Typography>
      </CardContent>
    </Card>
  );
};
