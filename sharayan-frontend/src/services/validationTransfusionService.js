import api from "../services/api";
export async function accepterDemandTransfusion(id) {
  const response = await api.post(`/admin/accepterTransfusion/${id}`);
  return response.data;
}
export async function terminerTransfusion(id) {
  const response = await api.post(`admin/terminerTransfusion/${id}`)
}
