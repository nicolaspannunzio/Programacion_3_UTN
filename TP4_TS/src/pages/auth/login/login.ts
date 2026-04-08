import { IUser } from "../../../types/IUser";
import { getUsers, saveSession } from "../../../utils/auth";
import { navigateTo } from "../../../utils/navigate";

const form = document.getElementById("form-login") as HTMLFormElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const errorMsg = document.getElementById("error-msg") as HTMLParagraphElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const users = getUsers();

  const usuario = users.find(
    (u: IUser) => u.email === email && u.password === password
  );

  if (!usuario) {
    errorMsg.textContent = "Email o contraseña incorrectos.";
    errorMsg.style.display = "block";
    return;
  }

  saveSession(usuario);

  if (usuario.rol === "admin") {
    navigateTo("../../admin/index.html");
  } else {
    navigateTo("../../client/index.html");
  }
});