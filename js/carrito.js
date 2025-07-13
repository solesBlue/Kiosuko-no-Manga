/*------------Abrir Pop Up carrito----------*/

  const abrirCarrito = document.getElementById("abrir-carrito");
  const modalCarrito = document.getElementById("modal-carrito");
  const cerrarCarrito = document.getElementById("cerrar-carrito");

  abrirCarrito.addEventListener("click", (e) => {
    e.preventDefault();
    modalCarrito.style.display = "flex";
  });

  cerrarCarrito.addEventListener("click", () => {
    modalCarrito.style.display = "none";
  });

  // Cerrar al hacer clic fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target === modalCarrito) {
      modalCarrito.style.display = "none";
    }
  });

