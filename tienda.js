document.addEventListener("DOMContentLoaded", function () {
    const precios = [120000, 160000, 140000];
    const cantidades = [0, 0, 0];

    const itemEls = [document.getElementById("item1"), document.getElementById("item2"), document.getElementById("item3")];
    const multEls = [document.getElementById("mult1"), document.getElementById("mult2"), document.getElementById("mult3")];

    const subtotalEl = document.getElementById("subtotalp");
    const envioEl = document.getElementById("envio");
    const descuentoEl = document.getElementById("descuentos");
    const totalEl = document.getElementById("totalp");
    const mensajeEl = document.getElementById("mensajec");

// Botones del carrito
document.getElementById("plus1").addEventListener("click", () => {
    cantidades[0]++;
    actualizarProducto(0);
    actualizarTotales();
});
document.getElementById("minus1").addEventListener("click", () => {
    if (cantidades[0] > 0) cantidades[0]--;
    actualizarProducto(0);
    actualizarTotales();
});
document.getElementById("delete1").addEventListener("click", () => {
    cantidades[0] = 0;
    actualizarProducto(0);
    actualizarTotales();
    multEls[0].textContent = "";
});

document.getElementById("plus2").addEventListener("click", () => {
    cantidades[1]++;
    actualizarProducto(1);
    actualizarTotales();
});
document.getElementById("minus2").addEventListener("click", () => {
    if (cantidades[1] > 0) cantidades[1]--;
    actualizarProducto(1);
    actualizarTotales();
});
document.getElementById("delete2").addEventListener("click", () => {
    cantidades[1] = 0;
    actualizarProducto(1);
    actualizarTotales();
    multEls[1].textContent = "";
});

document.getElementById("plus3").addEventListener("click", () => {
    cantidades[2]++;
    actualizarProducto(2);
    actualizarTotales();
});
document.getElementById("minus3").addEventListener("click", () => {
    if (cantidades[2] > 0) cantidades[2]--;
    actualizarProducto(2);
    actualizarTotales();
});
document.getElementById("delete3").addEventListener("click", () => {
    cantidades[2] = 0;
    actualizarProducto(2);
    actualizarTotales();
    multEls[2].textContent = "";
});

    document.getElementById("vaciar").addEventListener("click", () => {
        cantidades.fill(0);
        multEls.forEach(el => el.textContent = "");
        itemEls.forEach((el, i) => el.textContent = cantidades[i]);
        actualizarTotales();
    });

    document.getElementById("comprar").addEventListener("click", () => {
        document.getElementById("formulario-compra").style.display = "block";
    });

    document.getElementById("confirmar").addEventListener("click", () => {
        alert("¡Compra realizada con éxito!");
        document.getElementById("formulario-compra").style.display = "none";
    });

    document.getElementById("cancelar").addEventListener("click", () => {
        document.getElementById("formulario-compra").style.display = "none";
    });

    function actualizarProducto(i) {
        itemEls[i].textContent = cantidades[i];
        if (cantidades[i] > 0) {
            const total = cantidades[i] * precios[i];
            multEls[i].textContent = `= ${cantidades[i]} × $${precios[i].toLocaleString()} = $${total.toLocaleString()}`;
        } else {
            multEls[i].textContent = "";
        }
    }
// Botones "Añadir al carrito" en la sección de productos
document.getElementById("add1").addEventListener("click", () => {
    cantidades[0]++;
    actualizarProducto(0);
    actualizarTotales();
});

document.getElementById("add2").addEventListener("click", () => {
    cantidades[1]++;
    actualizarProducto(1);
    actualizarTotales();
});

document.getElementById("add3").addEventListener("click", () => {
    cantidades[2]++;
    actualizarProducto(2);
    actualizarTotales();
});

function actualizarTotales() {
    const subtotal = cantidades.reduce((acc, cant, i) => acc + cant * precios[i], 0);
    const totalProductos = cantidades.reduce((a, b) => a + b, 0);
    let envio = 12500;
    let descuento = 0;

        if (totalProductos >= 3) envio = 0;
        if (totalProductos >= 5) descuento = subtotal * 0.1;

        subtotalEl.textContent = `$${subtotal.toLocaleString()}`;
        envioEl.textContent = `$${envio.toLocaleString()}`;
        descuentoEl.textContent = `$${descuento.toLocaleString()}`;
        totalEl.textContent = `$${(subtotal + envio - descuento).toLocaleString()}`;

if (totalProductos < 3) {
    mensajeEl.textContent = "🚨 ¡Agrega al menos 3 productos para envío gratis!";
} else if (totalProductos === 3) {
    mensajeEl.textContent = "✅ ¡Tienes envío gratis! Agrega 2 más para 10% de descuento.";
} else if (totalProductos === 4) {
    mensajeEl.textContent = "✅ ¡Tienes envío gratis! Agrega 1 más para 10% de descuento.";
} else {
    mensajeEl.textContent = "🎉 ¡Envío gratis y 10% de descuento aplicados!";
}
    }

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