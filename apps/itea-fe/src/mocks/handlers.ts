import { http, HttpResponse } from 'msw';

export const checkoutEndpoint = "/checkout" //todo no longer export when only used here
export const productEndpoint = "/product" //todo check if correct and put into endpoint file
export const allProductsEndpoint = "/products" //todo check if correct and put into endpoint file
export const usersEndpoint = "user" //todo check if correct and put into endpoint file



export const handlers = [
  http.get(allProductsEndpoint, () => {
    return HttpResponse.json({
      products: [
        // TODO
      ],
    });
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
