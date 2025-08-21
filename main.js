document.addEventListener("DOMContentLoaded", function () {
  // Función para mostrar/ocultar contenido basado en el contenedor
  function toggleContent(containerSelector, contentTag) {
    const headers = document.querySelectorAll(`${containerSelector} h3`);

    headers.forEach((header) => {
      header.addEventListener("click", function () {
        // Encontrar el contenido asociado
        let content = this.nextElementSibling;
        while (content && content.tagName !== contentTag) {
          content = content.nextElementSibling;
        }

        if (content) {
          // Si estamos en la sección de experiencia, manejamos las transiciones
          if (containerSelector === "#experience") {
            // Toggle la clase active para activar las transiciones
            content.classList.toggle("active");

            // Ajustar la altura del contenedor padre
            const job = this.closest(".job");
            if (job) {
              if (!content.classList.contains("active")) {
                // Si estamos cerrando, esperamos a que termine la animación
                setTimeout(() => {
                  job.style.minHeight = "";
                }, 500);
              } else {
                // Si estamos abriendo, ajustamos la altura inmediatamente
                const contentHeight = content.scrollHeight;
                job.style.minHeight = `${contentHeight + 100}px`;
              }
            }
          } else {
            // Para otras secciones, mantenemos el comportamiento original
            content.style.display =
              content.style.display === "none" ? "block" : "none";
          }
        }
      });
    });

    // Inicialización según el tipo de contenedor
    if (containerSelector === "#experience") {
      document
        .querySelectorAll(`${containerSelector} ${contentTag.toLowerCase()}`)
        .forEach((element) => {
          element.classList.remove("active");
        });
    } else {
      document
        .querySelectorAll(`${containerSelector} ${contentTag.toLowerCase()}`)
        .forEach((element) => {
          element.style.display = "none";
        });
    }
  }

  // Llamamos a la función para ambos contenedores
  toggleContent("#projects", "P");
  toggleContent("#experience", "UL");
});
//-------------------------------------shreink---------------
