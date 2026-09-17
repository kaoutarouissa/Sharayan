import api from "./api";
export async function accepterDemande(id) {
  const response = await api.post(`/admin/accepterDon/${id}`);
  return response.data;
}
export async function terminerDemande(id) {
  const response = await api.post(`/admin/terminerDon/${id}`);
  return response.data;
}
export async function refuserDemandeDon(id) {
  const response = await api.post(`/admin/refuserDon/${id}`);
  return response.data;
}
