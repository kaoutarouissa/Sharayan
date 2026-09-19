import api from "./api";
export async function getinfoStock() {
  const response = await api.get("/admin/infoStock");
  return response.data;
}
export async function retirerStock(id) {
  const response= await api.delete(`/admin/stock_retirer/${id}`);
  return response.data
  
}
