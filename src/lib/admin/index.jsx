import { httpAuth } from "@/hook";
export const getUserLogin = async () => {
  const response = await httpAuth(`/user`);
  const result = await response.json();
  return result;
};
