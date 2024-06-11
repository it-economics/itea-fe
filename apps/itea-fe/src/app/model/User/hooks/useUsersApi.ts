import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useUsersApi } from './useGetUsername';

const queryKey = ["users"]

export const useGetUsername = (userId: number): UseQueryResult<string> => {
  const { getUsername } = useUsersApi()
  return useQuery({queryKey, queryFn: () => getUsername(userId)})
}
