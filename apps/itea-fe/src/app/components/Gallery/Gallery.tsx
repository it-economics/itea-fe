import {FC, useEffect, useState} from 'react';
import {ProductTile} from "./ProductTile";
import {Grid} from "@mui/material";
import {useGetProducts} from "../../model/Product/hooks/useGetProducts";
import {Product} from "../../model/Product/Product";

export const Gallery: FC = () => {

  const [products, setProducts] = useState<Product[]>([])
  const {data, isLoading} = useGetProducts()

  useEffect(() => {
    setProducts(data)
  }, [data])

  const dataIsLoaded = !isLoading && data.length > 0

  return dataIsLoaded ? (
    <Grid container spacing={20}
          direction="row"
          justifyContent="center"
          alignItems="center"
          paddingTop='2%'
    >
      {products?.map(product => (
        <Grid item xs={'auto'}>
          <ProductTile product={product}/>
        </Grid>
      ))}
    </Grid>
  ) : null
};
