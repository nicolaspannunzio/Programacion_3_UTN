import { IUser } from "../types/IUser";

const USERS_KEY = "users";
const SESSION_KEY = "userData";

export function getUsers(): IUser[] {
  const data = localStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveUsers(users: IUser[]): void {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function getSession(): IUser | null {
  const data = localStorage.getItem(SESSION_KEY);
  return data ? JSON.parse(data) : null;
}

export function saveSession(user: IUser): void {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export function clearSession(): void {
  localStorage.removeItem(SESSION_KEY);
}

export function initAdmin(): void {
  const users = getUsers();

  const adminExiste = users.find((u: IUser) => u.rol === "admin");

  if (!adminExiste) {
    const admin: IUser = {
      id: crypto.randomUUID(),
      email: "admin@foodstore.com",
      password: "admin123",
      rol: "admin",
    };

    users.push(admin);
    saveUsers(users);
  }
}