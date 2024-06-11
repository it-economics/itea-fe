import { handleRestCall } from '../../Product/hooks/useProductApi';
import { usersEndpoint } from '../../../../mocks/handlers';

export const useUsersApi = () => {
  //todo use handler
  const getUsername = async (userId: number) => {
    const result = await handleRestCall(usersEndpoint + "/" + userId + "/fullname", {
      method: 'get',
      body: null,
    })

    return result!==null ? result : "" //todo check if error on null necessary
  }

  return { getUsername };
}
