import {Button, Card, CardContent} from '@mui/material';
import Typography from '@mui/material/Typography';
import {FC} from 'react';
import {Product} from '../../model/Product/Product';
import {AspectRatio} from "@mui/icons-material";
import {useStoreProducts} from "../../contexts/StoreProductsContext";

interface ProductTileProps {
  product: Product;
}

export const ShoppingCartTile: FC<ProductTileProps> = ({product}) => {
  const { removeFromCart } = useStoreProducts();

  return (
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
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Add to Cart"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
          onClick={() => removeFromCart(product.id)}
        >
          Remove from Cart
        </Button>
      </CardContent>
    </Card>
  );
};
