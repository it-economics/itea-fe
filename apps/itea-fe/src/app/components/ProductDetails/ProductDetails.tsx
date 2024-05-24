import {FC, useEffect, useState} from 'react';
import {Card, CardContent, CardHeader, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Product} from "../../model/Product/Product";

export const ProductDetails: FC = ({Product}) => {

  const [product, setProduct] = useState<Product>(
    {id: '1', name: 'Product 1', description: 'Description 1', price: 100, imageName: 'https://via.placeholder.com/150'}
  )

  useEffect(() => {
    //todo fetchData()
  }, [])

  return (
    <div>
      <Card>
        <CardHeader
          title={product.name}
        />
        <CardMedia
          component="img"
          height="194"
          src={product.imageName}
          alt="Concert"
        />
        <CardContent>
          <Typography>{product.description}</Typography>
          <Typography><strong>Price: {product.price}</strong></Typography>
        </CardContent>
      </Card>
    </div>
  );
};
