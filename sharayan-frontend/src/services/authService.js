import api from "./api";
export async function login(email, password) {
  const response = await api.post("/login", {
    email,
    password,
  });

  localStorage.setItem("token", response.data.token);
  localStorage.setItem("user", JSON.stringify(response.data.user));
  console.log("Token :", response.data.token);
  return response.data;
}
export async function logout() {
  try {
    const response = await api.post("/logout");
    return response.data;
  } catch (error) {
    if (![401, 419].includes(error.response?.status)) {
      throw error;
    }
  } finally {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
}

export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export function getToken() {
  return localStorage.getItem("token");
}
export async function register(
  name,
  telephone,
  email,
  password,
  passwordConfirmation,
  role,
) {
  const response = await api.post("/register", {
    name,
    telephone,
    email,
    password,
    password_confirmation: passwordConfirmation,
    role,
  });

  return response.data;
}
export async function Profil(data) {
  const response = await api.put("/profile", data);
  return response.data;
}
