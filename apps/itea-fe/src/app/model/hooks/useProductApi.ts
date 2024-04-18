import { convertFromApiProduct } from '../Product';
import { productsApiClient } from './ProductsApiClient';

export const useProductApi = () => {
    const get = async (id: number) =>
      productsApiClient.get({ id: id }).then((response: ApiProduct) => convertFromApiProduct(response)).catch((e: any) => console.error(e));

    const getAll = async () =>
      productsApiClient.getAll().then((response: ApiProduct[]) => {
        const products = []

        for(let i = 0; i < response.length; i++) {
          products.push(convertFromApiProduct(response[i]))
        }

        return products
      }).catch((e: any) => console.error(e));

    return { get, getAll };
}
