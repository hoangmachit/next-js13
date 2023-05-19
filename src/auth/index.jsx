export const login = async (
  user_name,
  password,
  remember,
  setError,
  setLoading,
  router
) => {
  const BASE_API = process.env.BASE_API;
  const formData = new FormData();
  formData.append("user_name", user_name);
  formData.append("password", password);
  formData.append("remember", remember);
  setError(false);
  setLoading(true);
  const result = await fetch(`${BASE_API}/login`, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setError(null);
      setLoading(false);
    });
  if (result.status) {
    router.push("/admin");
  }
  setError(result.error);
  return result;
};
export const logout = async (user_name, password, remember) => {};
export const cross = async () => {
  console.log("crosss");
};
