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
