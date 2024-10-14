const header = document.querySelector("header");

const footer = document.querySelector("footer");

header.innerHTML = `
    <nav class="nav-container">
      <div class="logo">
        <a href="/index.html"><img src="../assets/img/img-header/Logo.gif" alt="gif logo"></a>
      </div>
      <div class="nav-links">
        <ul>
          <li><a href="/index.html">Inicio</a></li>
          <li><a href="/pages/about-us.html">Sobre Nosotros</a></li>
          <li><a href="/pages/remeras-camisetas.html">Remeras y Camisetas</a></li>
          <li><a href="../pages/zapatillas.html">Zapatillas</a></li>
          <li><a href="../pages/pantalones.html">Pantalones</a></li>
        </ul>
      </div>
      
      <div class="access-login">
        <ul>
          <li><a href="/pages/login.html"><i class="fa-solid fa-arrow-right-to-bracket"></i></a></li>
        </ul>
      </div>
    </nav>`;

footer.innerHTML = `
<div class="footer-container">

      <div class="tiendas">
        <h5>Locales</h5>
        <ul>
          <li><a href="/pages/locales.html">Nuestros Locales</a>
          </li>
        </ul>
    </div>
    <div class="asistencia">
      <h5>Asistencia</h5>
      <ul>
        <li><a href="/pages/cambios-y-devoluciones.html">Cambios y Devoluciones</a></li>
        <li><a href="/pages/guia-talles.html">Guía de Talles</a></li>
        <li><a href="/pages/venta-mayorista.html">Venta Mayorista</a></li>
        <li><a href="/pages/formulario-contacto.html">Contacto</a></li>
      </ul>
    </div>
  </div>`;
