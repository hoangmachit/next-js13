import { setCookie } from "cookies-next";
import { fetchClient } from "@/hook/fetch/client";
export const login = async (
  email,
  password,
  remember,
  setError,
  setLoading,
  router
) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  formData.append("remember", remember);
  setError(null);
  setLoading(true);
  await fetchClient(`/login`, {
    method: "POST",
    body: formData,
  })
    .then(async (response) => {
      const data = await response.json();
      if (data.success) {
        const options = {
          httpOnly: false,
          path: "/",
        };
        setCookie("access_token", data.result.access_token, options);
        router.push("/admin");
      } else {
        setError(result.error);
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
  return true;
};
export const logout = async (user_name, password, remember) => {};
export const cross = async () => {
  console.log("crosss");
};
