import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { useCheckoutApi } from '../api/useCheckoutApi';
import { Receipt } from '../model/Receipt';
import { OrderRequest } from '../../order/model/OrderRequest';

const queryKey = ['checkout'];

export const useCheckout = (
  orderRequest: OrderRequest
): UseQueryResult<Receipt> => {
  const { checkout } = useCheckoutApi();
  return useQuery({ queryKey, queryFn: () => checkout(orderRequest) });
};
