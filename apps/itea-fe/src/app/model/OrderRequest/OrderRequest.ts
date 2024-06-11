export interface OrderRequest {
  order: Map<string, number> //productId, quantity
}

export const convertToApiOrderRequest = (orderRequest: OrderRequest) =>
  Array.from(orderRequest.order,
    ([productId, quantity]) => ({ productId: productId, amount: quantity }))
