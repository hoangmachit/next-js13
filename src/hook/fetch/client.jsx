export const fetchClient = (path, options) => {
  const url = process.env.NEXT_PUBLIC_API + path;
  options = {
    ...options,
    headers: {
      ...options?.headers,
    },
  };
  return fetch(url, options);
};
