// TODO: NAVBAR MENU - RESPONSIVE (MOBILE)
const hamburgerMenu = document.getElementById('hamburger-menu');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// TODO: DESCARGAR PDF DEL CURRICULUM
document.addEventListener("DOMContentLoaded", () => {
  // Obtener el enlace de descarga del CV
  const descargarCV = document.getElementById("descargarCV");

  // Agregar evento de clic al enlace
  descargarCV.addEventListener("click", (event) => {
    // Prevenir el comportamiento por defecto de abrir el enlace
    event.preventDefault();

    // Llamar a la función para descargar el PDF
    descargarPDF();
  });

  // Función para descargar el PDF
  const descargarPDF = () => {
    // URL de tu archivo PDF
    const urlPDF = "../assets/pdf/cv.pdf";

    // Crear un elemento <a> temporal para descargar el PDF
    const linkTemp = document.createElement("a");
    linkTemp.href = urlPDF;
    linkTemp.setAttribute("download", "mi_curriculum.pdf");

    // Agregar el enlace temporal al documento
    document.body.appendChild(linkTemp);

    // Simular clic en el enlace temporal
    linkTemp.click();

    // Eliminar el enlace temporal del documento
    document.body.removeChild(linkTemp);
  };
});
