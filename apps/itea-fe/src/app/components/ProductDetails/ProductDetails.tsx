import {FC, useEffect, useState} from 'react';
import {Button, Card, CardContent, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Product} from "../../model/Product/Product";
import {AspectRatio} from "@mui/icons-material";
import {useStoreProducts} from "../../contexts/StoreProductsContext";
import {useGetProduct} from "../../model/Product/hooks/useGetProducts";
import {useParams} from "react-router-dom";

export const ProductDetails: FC = () => {
  const {id} = useParams<{id: string}>()
  const { add2Cart } = useStoreProducts();

  const [product, setProduct] = useState<Product | undefined>()

  const {data} = useGetProduct(id)

  useEffect(() => {
    setProduct(data)
  }, [data])

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
          <Typography level="title-lg">{product?.name}</Typography>
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img
            src={product?.imageName ?? ''}
            srcSet={product?.imageName ?? ''}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent orientation="horizontal">
          <div>
            <Typography level="body-xs">{product?.description}</Typography>
            <Typography level="body-xs">Price:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              {product?.price}
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
