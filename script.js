document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("anio-select");
  const ciclos = document.querySelectorAll(".ciclo");

  window.filtrarPorAnio = function () {
    const anioSeleccionado = select.value;

    ciclos.forEach((ciclo) => {
      const anio = ciclo.getAttribute("data-anio");

      if (anioSeleccionado === "todos" || anio === anioSeleccionado) {
        ciclo.style.display = "block";
      } else {
        ciclo.style.display = "none";
      }
    });
  };

  window.mostrarInfo = function (curso) {
    document.getElementById("modal-title").textContent = curso;
    document.getElementById("modal-desc").textContent = `Información detallada de ${curso}`;
    document.getElementById("modal").style.display = "block";
  };

  window.cerrarModal = function () {
    document.getElementById("modal").style.display = "none";
  };
});

