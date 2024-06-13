import { useProductApi } from './useProductApi';
import { Product } from '../Product';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

const queryKey = ["products"]

export const useGetProducts = (): UseQueryResult<Product[]> => {
    const { getAll } = useProductApi()
    return useQuery({queryKey, queryFn: () => getAll()})
}
export const useGetProduct = (id?: string): UseQueryResult<Product> => {
    const { get } = useProductApi()
    return useQuery({queryKey, queryFn: () => get(id)})
}
