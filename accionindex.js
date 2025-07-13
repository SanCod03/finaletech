document.addEventListener("DOMContentLoaded", () => {
  const rutas = {
    bElectricidad: "electricidad.html",
    bMecanica: "mecanica.html",
    btienda: "tienda.html",
    bEquipo: "equipo.html",
    bcontacto: "contacto.html"
  };

  Object.entries(rutas).forEach(([id, url]) => {
    const boton = document.getElementById(id);
    if (boton) {
      boton.addEventListener("click", () => {
        window.location.href = url;
      });
    }
  });
});