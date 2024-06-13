import {http, HttpResponse} from 'msw';

export const checkoutEndpoint = "/checkout" //todo no longer export when only used here
export const productEndpoint = "/product/details" //todo check if correct and put into endpoint file
export const allProductsEndpoint = "/products" //todo check if correct and put into endpoint file
export const usersEndpoint = "user" //todo check if correct and put into endpoint file


export const handlers = [
  http.get(allProductsEndpoint, () => {
    return HttpResponse.json({
      products: [
        {
          id: '1',
          name: 'Lamp',
          description: 'It really brightens the room',
          price: 30,
          imageName: '../assets/images/pexels-colour-creation-28649-112811.jpg'
        },
        {
          id: '2',
          name: 'Table',
          description: 'Better than nothing',
          price: 250,
          imageName: '../assets/images/pexels-blankspace-2647714.jpg'
        },
        {
          id: '3',
          name: 'Clothing Rack',
          description: 'It holds your stuff',
          price: 100,
          imageName: '../assets/images/pexels-liza-summer-6347597.jpg'
        },
        {
          id: '4',
          name: 'Couch',
          description: 'Nice and comfy',
          price: 350,
          imageName: '../assets/images/pexels-martinpechy-1866149.jpg'
        },
        {
          id: '5',
          name: 'Chair',
          description: 'Nice and not so comfy',
          price: 150,
          imageName: '../assets/images/pexels-paula-schmidt-353488-963486.jpg'
        },
      ],
    });
  }),

  http.get(productEndpoint + '/1', () => {
    return HttpResponse.json({
      product:
        {
          id: '1',
          name: 'Lamp',
          description: 'It really brightens the room',
          price: 30,
          imageName: '../assets/images/pexels-colour-creation-28649-112811.jpg'
        },
    });
  }),

  http.get(productEndpoint + '/2', () => {
    return HttpResponse.json({
      product:
        {
          id: '2',
          name: 'Table',
          description: 'Better than nothing',
          price: 250,
          imageName: '../assets/images/pexels-blankspace-2647714.jpg'
        },
    });
  }),

  http.get(productEndpoint + '/3', () => {
    return HttpResponse.json({
      product:
        {
          id: '3',
          name: 'Clothing Rack',
          description: 'It holds your stuff',
          price: 100,
          imageName: '../assets/images/pexels-liza-summer-6347597.jpg'
        },
    });
  }),

  http.get(productEndpoint + '/4', () => {
    return HttpResponse.json({
      product:
        {
          id: '4',
          name: 'Couch',
          description: 'Nice and comfy',
          price: 350,
          imageName: '../assets/images/pexels-martinpechy-1866149.jpg'
        },
    });
  }),

  http.get(productEndpoint + '/5', () => {
    return HttpResponse.json({
      product:
        {
          id: '5',
          name: 'Chair',
          description: 'Nice and not so comfy',
          price: 150,
          imageName: '../assets/images/pexels-paula-schmidt-353488-963486.jpg'
        },
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
