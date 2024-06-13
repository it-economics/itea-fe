import { convertFromApiProduct, Product } from '../Product';
import { allProductsEndpoint, productEndpoint } from '../../../../mocks/handlers';

const hasBody = (method?: string) => /(post|put|delete|patch)/i.test(method || '') //todo move to utils

export const handleRestCall  = async (requestInput: RequestInfo | URL, requestInit: RequestInit) =>  { //todo move to utils
  let headers
  if(hasBody(requestInit?.method)) {
    headers = {Accept: 'application/json', 'Content-Type': 'application/json'}
  } else {
    headers = {Accept: 'application/json'}
  }

  const response = await fetch(requestInput, {...requestInit, headers: headers})
  return response.status !== 204 ? response.json() : null
}


export const useProductApi = () => {
    const get = async (id?: string) => {
      //todo use handler
      const result = await handleRestCall(productEndpoint + "/" + id, {
        method: 'get',
        body: null,
      }) as {product: Product}

      return result!==null ? convertFromApiProduct(result.product) : null //todo check if convert can handle null
    }



    const getAll = async () => {
      const result = await handleRestCall(allProductsEndpoint, {
        method: 'get',
        body: null,
      }) as {products: Product[]}

      return result.products.map((product) => convertFromApiProduct(product))
    }

    return { get, getAll };
}
