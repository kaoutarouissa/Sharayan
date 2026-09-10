import api from "./api";
export async function login(email, password) {
  const response = await api.post("/login", {
    email,
    password,
  });
  localStorage.setItem("token", response.data.token);
  localStorage.setItem("user", JSON.stringify(response.data.user));
  return response.data;
}
export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
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
