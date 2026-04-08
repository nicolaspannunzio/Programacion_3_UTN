import { IUser } from "../../../types/IUser";
import { getUsers, saveUsers } from "../../../utils/auth";
import { navigateTo } from "../../../utils/navigate";

const form = document.getElementById("form-registro") as HTMLFormElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const errorMsg = document.getElementById("error-msg") as HTMLParagraphElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (password.length < 6) {
    errorMsg.textContent = "La contraseña debe tener al menos 6 caracteres.";
    errorMsg.style.display = "block";
    return;
  }

  const users = getUsers();

  const existe = users.find((u: IUser) => u.email === email);
  if (existe) {
    errorMsg.textContent = "Ya existe un usuario con ese email.";
    errorMsg.style.display = "block";
    return;
  }

  const nuevoUsuario: IUser = {
    id: crypto.randomUUID(),
    email,
    password,
    rol: "client",
  };

  users.push(nuevoUsuario);
  saveUsers(users);

  navigateTo("../login/index.html");
});