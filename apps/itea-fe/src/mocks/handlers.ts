import { http, HttpResponse } from 'msw';
import { products } from './data/products';
import {
  allProductsEndpoint,
  checkoutEndpoint,
  productEndpoint,
  usersEndpoint,
} from '../app/infra/endpoints';

export const handlers = [
  http.get(allProductsEndpoint, () => {
    return HttpResponse.json({
      products,
    });
  }),

  http.get<{ id: string }>(`${productEndpoint}/:id`, ({ params }) => {
    const productId = params.id;
    const product = products.find((product) => product.id === productId);

    return product
      ? HttpResponse.json({
          product,
        })
      : HttpResponse.json({ error: 'Product not found' }, { status: 404 });
  }),

  //todo add body
  http.post(checkoutEndpoint, () => {
    return HttpResponse.json({
      products: [
        // TODO
      ],
    });
  }),

  //todo see path in user hook
  http.get(usersEndpoint, () => {
    return HttpResponse.json({
      products: [
        // TODO
      ],
    });
  }),
];
