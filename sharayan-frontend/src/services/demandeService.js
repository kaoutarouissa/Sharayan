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
