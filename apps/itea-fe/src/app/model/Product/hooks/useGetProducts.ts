import { useProductApi } from './useProductApi';
import { Product } from '../Product';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

const queryKeyProducts = ['products'];
const queryKeyProduct = (id: string) => ['product', id];

export const useGetProducts = (): UseQueryResult<Product[]> => {
  const { getAll } = useProductApi();
  return useQuery({ queryKey: queryKeyProducts, queryFn: () => getAll() });
};
export const useGetProduct = (id: string): UseQueryResult<Product> => {
  const { get } = useProductApi();
  return useQuery({ queryKey: queryKeyProduct(id), queryFn: () => get(id) });
};
