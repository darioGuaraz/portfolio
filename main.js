document.addEventListener("DOMContentLoaded", function () {
  // Función para mostrar/ocultar contenido basado en el contenedor
  function toggleContent(containerSelector, contentTag) {
    const headers = document.querySelectorAll(`${containerSelector} h3`);

    headers.forEach((header) => {
      header.addEventListener("click", function () {
        let content = this.nextElementSibling;

        while (content && content.tagName !== contentTag) {
          content = content.nextElementSibling;
        }

        if (content) {
          content.style.display =
            content.style.display === "none" ? "block" : "none";
        }
      });
    });

    // Inicialmente oculta todos los elementos relevantes
    document
      .querySelectorAll(`${containerSelector} ${contentTag.toLowerCase()}`)
      .forEach((element) => {
        element.style.display = "none";
      });
  }

  // Llamamos a la función para ambos contenedores
  toggleContent("#projects", "P");
  toggleContent("#experience", "UL");
});
//-------------------------------------carousel info---------------

//--------------boton tema oscruo---------------------------//

document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");

  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", (e) => {
      e.preventDefault();

      // Alterna la clase 'dark-mode' en el body
      document.body.classList.toggle("dark-mode");

      // Alterna la clase 'dark-mode' en otros elementos
      document
        .querySelectorAll(
          "header, h3, section, #text-about, .footer, #education, #experience, #projects, #about .navbar-nav .nav-link"
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
