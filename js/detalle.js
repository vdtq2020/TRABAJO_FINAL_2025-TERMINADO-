const MOVIES_URL = "data/moviesdb.json";

const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

fetch(MOVIES_URL)
  .then((res) => res.json())
  .then((data) => {
    const movie = data.find((m) => m.id == movieId);
    const container = document.getElementById("movie-detail");

    if (movie) {
      container.innerHTML = `
        <div class="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <img src="${movie.image}" alt="${movie.title}" class="w-full rounded-lg mb-4" />
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-3">${movie.title}</h1>
          <p class="text-gray-700 dark:text-gray-300 mb-4">${movie.description}</p>

          <div class="grid sm:grid-cols-2 gap-4 mb-4">
            <p><strong>Ubicación:</strong> ${movie.genre}</p>
            <p><strong>Duración:</strong> ${movie.duration || "No especificado"}</p>
            <p><strong>Calificación:</strong> ⭐ ${movie.rating}</p>
          </div>

          <h2 class="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-2">
            Más información:
          </h2>
          <p class="text-gray-700 dark:text-gray-300">${movie.synopsis || "Sin información adicional"}</p>

          <a href="index.html" class="inline-block mt-6 text-blue-600 hover:underline">
            ← Volver a Paquetes
          </a>
        </div>
      `;
    } else {
      container.innerHTML = `
        <p class="text-center text-gray-600 dark:text-gray-300">
          No se encontró el paquete turístico seleccionado.
        </p>
      `;
    }
  })
  .catch((error) => console.error("Error al cargar detalles:", error));
