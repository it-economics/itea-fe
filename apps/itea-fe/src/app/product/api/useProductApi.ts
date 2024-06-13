import { allProductsEndpoint, productEndpoint } from '../../infra/endpoints';
import { handleRestCall } from '../../infra/rest';
import { Product } from '../model/Product';
import { convertFromApiProduct } from './mapper';

export const useProductApi = () => {
  const get = async (id?: string) => {
    //todo use handler
    const result = (await handleRestCall(productEndpoint + '/' + id, {
      method: 'get',
      body: null,
    })) as { product: Product };

    return result !== null ? convertFromApiProduct(result.product) : null; //todo check if convert can handle null
  };

  const getAll = async () => {
    const result = (await handleRestCall(allProductsEndpoint, {
      method: 'get',
      body: null,
    })) as { products: Product[] };

    return result.products.map((product) => convertFromApiProduct(product));
  };

  return { get, getAll };
};
