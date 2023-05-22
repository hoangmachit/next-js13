import { fetchServer } from "@/hook/fetch/server";
export const getRoleList = async () => {
  const response = await fetchServer("/admin/role", {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
};
export const getRoleDetail = async (id) => {
  if (!id) return false;
  const response = await fetchServer(`/admin/role/${id}`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
};

export const updateRole = async (id, name) => {
  if (!id) return false;
  const formData = new FormData();
  formData.append("name", name);
  formData.append("_method", "PUT");
  const response = await fetchServer(`/admin/role/${id}`, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data;
};

export const deleteRole = async (id) => {
  if (!id) return false;
  const response = await fetchServer(`/admin/role/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
