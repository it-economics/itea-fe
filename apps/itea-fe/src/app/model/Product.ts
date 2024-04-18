export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export const convertFromApiProduct = (apiProduct: any): Product => { //todo add type when api was generated
  return {
    id: apiProduct.id,
    name: apiProduct.name,
    description: apiProduct.description,
    price: apiProduct.price,
    imageUrl: "" //todo get image url either "hardcoded" or add to backend
  }
}
