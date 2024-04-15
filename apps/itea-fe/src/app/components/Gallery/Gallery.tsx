import {FC, useEffect, useState} from 'react';
import {Product} from "../../model/Product";
import {ProductTile} from "./ProductTile";

export const Gallery: FC = () => {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    //fetchData()
  }, [])


  return (
    <>
      <h1>Products</h1>
      {products.map(product => (
        <ProductTile product={product}/>
      ))}
    </>
  );
};
