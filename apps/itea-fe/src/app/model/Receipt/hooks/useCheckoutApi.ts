import { handleRestCall } from '../../Product/hooks/useProductApi';
import { convertToApiOrderRequest, OrderRequest } from '../../OrderRequest/OrderRequest';
import { checkoutEndpoint } from '../../../../mocks/handlers';


export const useCheckoutApi = () => {
  const checkout = async (orderRequest: OrderRequest) : Promise<number> => {
    const requestBody = convertToApiOrderRequest(orderRequest)
    //todo use handler
    const result : number = await handleRestCall(checkoutEndpoint, {
      method: 'post',
      body: JSON.stringify(requestBody),
    })

    return result
  }

  return { checkout };
}
