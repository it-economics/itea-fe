import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useProductApi } from '../api/useProductApi';
import { Product } from '../model/Product';

const queryKeyProducts = ['products'];
const queryKeyProduct = (id: string) => ['product', id];

export const useProducts = (): UseQueryResult<Product[]> => {
  const { getAll } = useProductApi();
  return useQuery({ queryKey: queryKeyProducts, queryFn: () => getAll() });
};
export const useProduct = (id: string): UseQueryResult<Product> => {
  const { get } = useProductApi();
  return useQuery({ queryKey: queryKeyProduct(id), queryFn: () => get(id) });
};
