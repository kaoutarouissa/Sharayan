import api from "../services/api";
export async function accepterDemandTransfusion(id) {
  const response = await api.post(`/admin/accepterTransfusion/${id}`);
  return response.data;
}
