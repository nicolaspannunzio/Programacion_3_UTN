import { getSession, clearSession } from "../../utils/auth";
import { navigateTo } from "../../utils/navigate";

const session = getSession();
const bienvenida = document.getElementById("bienvenida") as HTMLParagraphElement;
const btnLogout = document.getElementById("btn-logout") as HTMLButtonElement;

bienvenida.textContent = `Bienvenido, ${session?.email}`;

btnLogout.addEventListener("click", () => {
  clearSession();
  navigateTo("../auth/login/index.html");
});