export const httpAuth = (path, options) => {
  const url = process.env.NEXT_PUBLIC_API + path;
  const bearerToken = "1|y629dxoC7IWQaVnT3CihUOwqopfnyieKooVlFH09";
  const headers = {
    Authorization: `Bearer ${bearerToken}`,
  };
  options = {
    ...options,
    headers: {
      ...(options?.headers || {}),
      ...headers,
    },
  };
  return fetch(url, options);
};
export const http = (url, options) => {
  options = {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  };
  return fetch(url, options);
};
