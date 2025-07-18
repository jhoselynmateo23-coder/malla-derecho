<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Malla Curricular - Derecho</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>Malla Curricular - Derecho</h1>
  <div id="filtros">
    <label for="anio-select">Filtrar por año:</label>
    <select id="anio-select" onchange="filtrarPorAnio()">
      <option value="todos">Todos</option>
      <option value="1">1er año</option>
      <option value="2">2do año</option>
      <option value="3">3er año</option>
      <option value="4">4to año</option>
      <option value="5">5to año</option>
      <option value="6">6to año</option>
    </select>
  </div>

  <div class="grid-container">
    <!-- ciclos existentes -->
    [ ...contenido existente de los ciclos... ]
  </div>

  <div id="modal" class="modal">
    <div class="modal-content">
      <span onclick="cerrarModal()" class="close">&times;</span>
      <h3 id="modal-title">Curso</h3>
      <p id="modal-desc">Aquí irá la información del curso.</p>
    </div>
  </div>

  <script>
    function filtrarPorAnio() {
      const anioSeleccionado = document.getElementById("anio-select").value;
      const ciclos = document.querySelectorAll(".ciclo");

      ciclos.forEach(ciclo => {
        const anioCiclo = ciclo.getAttribute("data-anio");
        if (anioSeleccionado === "todos" || anioSeleccionado === anioCiclo) {
          ciclo.style.display = "block";
        } else {
          ciclo.style.display = "none";
        }
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

    // Cierra el modal si se hace clic fuera de él
    window.onclick = function(event) {
      const modal = document.getElementById("modal");
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  </script>
</body>
</html>
