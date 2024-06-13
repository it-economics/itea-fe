import { Product } from '../model/Product';

export const convertFromApiProduct = (apiProduct: any): Product => {
  return {
    id: apiProduct.id,
    name: apiProduct.name,
    description: apiProduct.description,
    price: apiProduct.price,
    imageName: apiProduct.imageName,
  };
};
