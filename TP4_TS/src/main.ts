import { initAdmin, getSession } from "./utils/auth";
import { navigateTo } from "./utils/navigate";

initAdmin();

function guard(): void {
  const session = getSession();
  const path = window.location.pathname;

  const esLoginORegistro =
    path.includes("/login/") || path.includes("/registro/");

  if (esLoginORegistro) return;

  if (!session) {
    navigateTo("/src/pages/auth/login/index.html");
    return;
  }

  if (path.includes("/admin/") && session.rol !== "admin") {
    navigateTo("/src/pages/client/index.html");
    return;
  }

  if (path.includes("/client/") && session.rol !== "client") {
    navigateTo("/src/pages/admin/index.html");
    return;
  }
}

guard();