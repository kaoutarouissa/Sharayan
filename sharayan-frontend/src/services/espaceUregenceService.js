import api from "../services/api"
export async function espaceUrgence() {
    const response=await api.get("/espace-urgence");
    return response.data
    
}