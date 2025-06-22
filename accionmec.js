// accionele.js

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM completamente cargado. El script está listo para interactuar con los elementos.");

    const form = document.getElementById("citaele");

    if (form) {
        console.log("Formulario 'citaele' encontrado. Añadiendo eventListener para submit.");
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Detiene el envío predeterminado

            console.log("Evento 'submit' detectado. Recopilando datos del formulario.");

            // Ahora, con DOMContentLoaded, document.getElementById(...).value debería ser una cadena (incluso si está vacía)
            // y .trim() debería funcionar sin problemas.
            const datos = {
                Nombre: document.getElementById("nombre").value.trim(),
                Teléfono: document.getElementById("tel").value.trim(),
                Correo: document.getElementById("email").value.trim(),
                "Tipo de servicio": document.getElementById("tipo").value.trim(),
                Marca: document.getElementById("marca").value.trim(),
                Modelo: document.getElementById("modelo").value.trim(),
                Año: document.getElementById("año").value.trim(),
                Placa: document.getElementById("placa").value.trim(),
                "Fecha de cita": document.getElementById("fecha").value.trim(),
                Problema: document.getElementById("problema").value.trim()
            };

            // Validar campos vacíos
            for (const campo in datos) {
                if (!datos[campo]) {
                    alert(`⚠️ Por favor completa el campo: ${campo}`);
                    console.log(`Campo vacío detectado durante validación: ${campo}`); // Este mensaje debería aparecer ahora si un campo *realmente* está vacío
                    return; // Detiene la función si encuentra un campo vacío
                }
            }

            // Si llegamos aquí, todos los campos están llenos
            let mensaje = "¿Deseas confirmar el envío con los siguientes datos?\n\n";
            for (const campo in datos) {
                mensaje += `${campo}: ${datos[campo]}\n`;
            }

            if (confirm(mensaje)) {
                alert("✅ ¡Formulario enviado con éxito! ✅\n\nResumen:\n" + mensaje);
                form.reset(); // Limpia el formulario
            } else {
                alert("❌ Envío cancelado.");
            }
        });
    } else {
        console.error("Error: El formulario con ID 'citaele' no fue encontrado después de DOMContentLoaded.");
    }
});