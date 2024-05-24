import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Receipt } from '../Receipt';
import { useCheckoutApi } from './useCheckoutApi';
import { OrderRequest } from '../../OrderRequest/OrderRequest';

const queryKey = ["checkout"]

export const useCheckout = (orderRequest: OrderRequest): UseQueryResult<Receipt> => {
  const { checkout } = useCheckoutApi()
  return useQuery({queryKey, queryFn: () => checkout(orderRequest)})
}
