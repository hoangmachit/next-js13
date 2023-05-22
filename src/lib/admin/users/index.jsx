import { fetchServer } from "@/hook/fetch/server";
export const getUserList = async () => {
  const response = await fetchServer("/admin/user");
  const result = await response.json();
  return result;
};
export const getUserDetail = async (id) => {
  if (!id) return false;
  const response = await fetchServer(`/admin/user/${id}`);
  const result = await response.json();
  return result;
};
