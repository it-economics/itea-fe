export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; //in cents
  imageName: string;
}

export const convertFromApiProduct = (apiProduct: any): Product => {
  return {
    id: apiProduct.id,
    name: apiProduct.name,
    description: apiProduct.description,
    price: apiProduct.price,
    imageName: apiProduct.imageName
  }
}
