import api from "../services/api";
export async function createDemandeTransfusion(
  date_transfusion,
  hopital,
  niveau_urgence,
  motif,
) {
  const response = await api.post("/demandes-transfusion", {
    date_transfusion,
    hopital,
    niveau_urgence,
    motif,
  });
  return response.data;
}

export async function displayDemandeTransfusion() {
  const response = await api.get("demandes-transfusion/historique");
  return response.data;
}

export async function deletdemandeTransfusion(id) {
  const response = await api.delete(`/demandes-transfusion/delete/${id}`);
  return response.data;
}
export async function updateDemandeTransfusion(
  id,
  date_transfusion,
  hopital,
  niveau_urgence,
  motif,
) {
  const response = await api.put(`/demandes-transfusion/update/${id}`, {
    date_transfusion: date_transfusion,
    hopital: hopital,
    niveau_urgence: niveau_urgence,
    motif: motif,
  });
  return response.data;
}

export async function createDemandDon(request) {
  const response = await api.post("/demandes-don", request);
  return response.data;
}
export async function displayDemandeDon() {
  const response = await api.get("/demandes-don/historique");
  return response.data;
}
