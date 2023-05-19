import { httpAuth } from "@/hook";
export const getRoleList = async () => {
  const response = await httpAuth("/admin/roles/list", {
    cache: "no-store",
  });
  const result = await response.json();
  return result;
};
export const getRoleDetail = async (id) => {
  if (!id) return false;
  const response = await httpAuth(`/admin/roles/${id}`, {
    cache: "no-store",
  });
  const result = await response.json();
  return result;
};

export const updateRole = async (id, name) => {
  if (!id) return false;
  const formData = new FormData();
  formData.append("name", name);
  const response = await httpAuth(`/admin/roles/${id}`, {
    method: "POST",
    body: formData,
  });
  const result = await response.json();
  return result;
};
