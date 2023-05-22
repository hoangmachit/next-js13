export const fetchServer = (path, options, version = true) => {
  const currentAPI = version
    ? process.env.BASE_API_VERSION
    : process.env.NEXT_PUBLIC_API;
  const url = currentAPI + path;
  const access_token = cookies().get("access_token")?.value;
  const headers = {
    Authorization: `Bearer ${access_token}`,
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
