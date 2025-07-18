<script>
  function filtrarPorAnio() {
    const anioSeleccionado = document.getElementById("anio-select").value;
    const ciclos = document.querySelectorAll(".ciclo");

    ciclos.forEach(ciclo => {
      const anioCiclo = ciclo.getAttribute("data-anio");
      ciclo.style.display = (anioSeleccionado === "todos" || anioSeleccionado === anioCiclo) ? "block" : "none";
    });
  }

  function mostrarInfo(nombreCurso) {
    const modal = document.getElementById("modal");
    const titulo = document.getElementById("modal-title");
    const descripcion = document.getElementById("modal-desc");

    titulo.textContent = nombreCurso;
    descripcion.textContent = "Descripción de: " + nombreCurso;

    modal.style.display = "block";
  }

  function cerrarModal() {
    document.getElementById("modal").style.display = "none";
  }

  window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Al cargar la página, activar eventos para tachar y habilitar cursos
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".curso").forEach(curso => {
      curso.addEventListener("click", () => {
        if (!curso.classList.contains("disabled")) {
          curso.classList.toggle("completado");

          if (curso.classList.contains("completado")) {
            const cicloActual = parseInt(curso.closest(".ciclo").getAttribute("data-anio"));
            const siguienteCiclo = document.querySelector(`.ciclo[data-anio='${cicloActual + 1}']`);
            if (siguienteCiclo) {
              siguienteCiclo.querySelectorAll(".curso.disabled").forEach(c => c.classList.remove("disabled"));
            }
          }
        }
      });
    });
  });
</script>
