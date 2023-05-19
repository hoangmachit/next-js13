import { httpAuth } from "@/hook";
export const getListUser = async () => {
  const response = await httpAuth("/admin/user/list");
  const result = await response.json();
  return result;
};
export const getDetail = async (id) => {
  if (!id) return false;
  const response = await httpAuth(`/admin/user/${id}`);
  const result = await response.json();
  return result;
};
