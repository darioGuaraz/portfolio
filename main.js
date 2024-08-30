document.addEventListener("DOMContentLoaded", function () {
  // Función para mostrar/ocultar contenido basado en el contenedor
  function toggleContent(containerSelector) {
    // Selecciona todos los elementos h3 dentro del contenedor especificado
    const headers = document.querySelectorAll(`${containerSelector} h3`);

    headers.forEach((header) => {
      header.addEventListener("click", function () {
        // Determina el siguiente hermano relevante basado en el contenedor
        let content = this.nextElementSibling;

        if (containerSelector === "#projects") {
          // En `projects`, el contenido siguiente es un `<p>`
          while (content && content.tagName !== "P") {
            content = content.nextElementSibling;
          }
          if (content) {
            content.style.display =
              content.style.display === "none" ? "block" : "none";
          }
        } else if (containerSelector === "#experience") {
          // En `experience`, el contenido siguiente es un `<ul>`
          while (content && content.tagName !== "UL") {
            content = content.nextElementSibling;
          }
          if (content) {
            content.style.display =
              content.style.display === "none" ? "block" : "none";
          }
        }
      });
    });

    // Inicialmente oculta todos los elementos relevantes en cada contenedor
    if (containerSelector === "#projects") {
      document.querySelectorAll(`${containerSelector} p`).forEach((element) => {
        element.style.display = "none";
      });
    } else if (containerSelector === "#experience") {
      document.querySelectorAll(`${containerSelector} ul`).forEach((ul) => {
        ul.style.display = "none";
      });
    }
  }

  // Aplica la función a la sección de proyectos
  toggleContent("#projects");

  // Aplica la función a la sección de experiencia
  toggleContent("#experience");
});

//-------------------------------boton tema oscruo---------------------------//

document.addEventListener("DOMContentLoaded", () => {
  // Selecciona el botón de modo oscuro
  const darkModeToggle = document.getElementById("darkModeToggle");

  // Verifica si el elemento existe
  if (darkModeToggle) {
    // Escucha el evento de clic en el botón
    darkModeToggle.addEventListener("click", (e) => {
      e.preventDefault(); // Evita el comportamiento por defecto del enlace

      // Alterna la clase 'dark-mode' en el body y otros elementos
      document.body.classList.toggle("dark-mode");

      // Alterna la clase en los elementos específicos
      document
        .querySelectorAll(
          "header, section, #education, #experience, .navbar-nav .nav-link"
        )
        .forEach((element) => {
          element.classList.toggle("dark-mode");
        });

      // Cambia el texto del botón según el estado
      darkModeToggle.textContent = document.body.classList.contains("dark-mode")
        ? "☀️"
        : "🌙";
    });
  } else {
    console.error("El elemento con id='darkModeToggle' no fue encontrado.");
  }
});
