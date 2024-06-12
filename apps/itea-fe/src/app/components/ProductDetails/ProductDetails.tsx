import {FC, useEffect, useState} from 'react';
import {Button, Card, CardContent, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Product} from "../../model/Product/Product";
import {AspectRatio} from "@mui/icons-material";
import {useStoreProducts} from "../../contexts/StoreProductsContext";

export const ProductDetails: FC = () => {
  const { add2Cart } = useStoreProducts();

  const [product, setProduct] = useState<Product>(
    {id: '1', name: 'Product 1', description: 'Description 1', price: 100, imageName: 'https://via.placeholder.com/150'}
  )

  useEffect(() => {
    //todo fetchData()
  }, [])

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{minHeight: '100vh'}}
    >
      <Card sx={{ width: 320 }}>
        <div>
          <Typography level="title-lg">{product.name}</Typography>
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img
            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
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
          <Button
            variant="solid"
            size="md"
            color="primary"
            aria-label="Add to Cart"
            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
            onClick={() => add2Cart(product)}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};
