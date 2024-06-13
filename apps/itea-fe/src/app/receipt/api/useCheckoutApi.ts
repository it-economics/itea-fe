import { checkoutEndpoint } from '../../infra/endpoints';
import { handleRestCall } from '../../infra/rest';
import { convertToApiOrderRequest } from '../../order/api/mapper';
import { OrderRequest } from '../../order/model/OrderRequest';

export const useCheckoutApi = () => {
  const checkout = async (orderRequest: OrderRequest): Promise<number> => {
    const requestBody = convertToApiOrderRequest(orderRequest);
    //todo use handler
    const result: number = await handleRestCall(checkoutEndpoint, {
      method: 'post',
      body: JSON.stringify(requestBody),
    });

    return result;
  };

  return { checkout };
};
