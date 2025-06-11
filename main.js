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
//-------------------------------------shreink---------------
