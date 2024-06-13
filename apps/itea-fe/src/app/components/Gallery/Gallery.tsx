import {FC, useEffect, useState} from 'react';
import {Product} from "../../model/Product/Product";
import {ProductTile} from "./ProductTile";
import {Grid} from "@mui/material";
import {useGetProducts} from "../../model/Product/hooks/useGetProducts";

export const Gallery: FC = () => {

  const [products, setProducts] = useState<Product[]>([])
  const { data } = useGetProducts()

  useEffect(() => {
    setProducts(data || [])
  }, [data])


  return (
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
  );
};
