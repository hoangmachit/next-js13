import { fetchServer } from "@/hook/fetch/server";
export const getUserLogin = async () => {
  const response = await fetchServer(`/user`, {}, false);
  const data = await response.json();
  return data;
};
