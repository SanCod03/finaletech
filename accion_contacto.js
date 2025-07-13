const form = document.getElementById("form-contacto");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío automático

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !telefono || !mensaje) {
        alert("⚠️ Por favor completa todos los campos.");
        return;
    }

    const confirmacion = confirm(
        `¿Deseas enviar este mensaje?\n\n` +
        `Nombre: ${nombre}\nCorreo: ${email}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`
    );

    if (confirmacion) {
        alert("✅ ¡Gracias por contactarnos, " + nombre + "! Te responderemos pronto.");
        form.reset(); // Limpia el formulario
    } else {
        alert("❌ Envío cancelado. Puedes revisar tus datos.");
    }

    // Aquí puedes agregar cualquier otra acción que desees realizar después de la confirmación
});
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