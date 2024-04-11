import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/products', () => {
    return HttpResponse.json({
      products: [
        // TODO
      ],
    });
  }),
];
