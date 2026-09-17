import api from "./api";
export async function getinfoStock() {
  const response = await api.get("/admin/infoStock");
  return response.data;
}
