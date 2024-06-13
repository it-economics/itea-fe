const hasBody = (method?: string) =>
  /(post|put|delete|patch)/i.test(method || ''); //todo move to utils

export const handleRestCall = async (
  requestInput: RequestInfo | URL,
  requestInit: RequestInit
) => {
  //todo move to utils
  let headers;
  if (hasBody(requestInit?.method)) {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  } else {
    headers = { Accept: 'application/json' };
  }

  const response = await fetch(requestInput, {
    ...requestInit,
    headers: headers,
  });
  return response.status !== 204 ? response.json() : null;
};
