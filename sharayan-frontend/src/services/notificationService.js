import api from "./api";

export const displayNotifications = async () => {
  const response = await api.get("/notifications");

  return response.data;
};