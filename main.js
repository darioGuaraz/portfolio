document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los títulos de los proyectos
  const projectTitles = document.querySelectorAll(".project h3");

  // Añade un listener de clic a cada título
  projectTitles.forEach((title) => {
    title.addEventListener("click", function () {
      // Selecciona el contenido del proyecto correspondiente
      const projectContent = this.nextElementSibling;

      // Alterna la visibilidad del contenido
      if (
        projectContent.style.display === "none" ||
        projectContent.style.display === ""
      ) {
        projectContent.style.display = "block";
      } else {
        projectContent.style.display = "none";
      }
    });
  });

  // Inicialmente oculta todos los contenidos de los proyectos
  document.querySelectorAll(".project p").forEach((p) => {
    p.style.display = "none";
  });
});

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
