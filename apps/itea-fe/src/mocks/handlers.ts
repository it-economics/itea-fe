import { http, HttpResponse } from 'msw';
import { products } from './products';

export const checkoutEndpoint = '/checkout'; //todo no longer export when only used here
export const productEndpoint = '/product/details'; //todo check if correct and put into endpoint file
export const allProductsEndpoint = '/products'; //todo check if correct and put into endpoint file
export const usersEndpoint = 'user'; //todo check if correct and put into endpoint file

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
