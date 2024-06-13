import { OrderRequest } from '../model/OrderRequest';

export const convertToApiOrderRequest = (orderRequest: OrderRequest) =>
  Array.from(orderRequest.order, ([productId, quantity]) => ({
    productId: productId,
    amount: quantity,
  }));
