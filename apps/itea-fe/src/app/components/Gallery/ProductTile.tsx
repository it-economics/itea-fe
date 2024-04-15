import {FC} from 'react';
import {Card} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {Product} from "../../model/Product";

interface ProductTileProps {
  product: Product;
}

export const ProductTile: FC<ProductTileProps> = ({product}) => {

  const navigate = useNavigate()

  return (
    <Card onClick={() => navigate(`product/details/${product.id}`)}>
      <img src={`${product.imageUrl}`}  alt=""/>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
    </Card>
  );
};
