import {FC, useEffect, useState} from 'react';
import {Product} from "../../model/Product";
import {ProductTile} from "./ProductTile";
import {Grid} from "@mui/material";

export const Gallery: FC = () => {

  const [products, setProducts] = useState<Product[]>([
    {id: '1', name: 'Product 1', description: 'Description 1', price: 100, imageUrl: 'https://via.placeholder.com/150'},
    {id: '2', name: 'Product 2', description: 'Description 2', price: 200, imageUrl: 'https://via.placeholder.com/150'},
    {id: '3', name: 'Product 3', description: 'Description 3', price: 200, imageUrl: 'https://via.placeholder.com/150'},
    {id: '4', name: 'Product 4', description: 'Description 4', price: 200, imageUrl: 'https://via.placeholder.com/150'}])

  useEffect(() => {
    //fetchData()
  }, [])


  return (
    <>
      <h1>Products</h1>
      <Grid container spacing={20}
            direction="row"
            justifyContent="center"
            alignItems="center">
        {products.map(product => (
          <Grid item xs={'auto'}>
            <ProductTile product={product}/>
          </Grid>
        ))}
      </Grid>)
    </>
  );
};
