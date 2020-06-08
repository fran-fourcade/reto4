<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="utf-8">
  <meta name="description" content="Sitio contruido con BULMA CSS para reto 4">

  <!-- Link a la hoja de estilos propia -->
  <link rel="stylesheet" href="css/estilos.css">

  <!-- Link al framework utilizado -->
  <link rel="stylesheet" href="/bulma-0.8.2/css/bulma.min.css">

  <link rel="stylesheet" href="css/animations.css">
  <link href="https://fonts.googleapis.com/css2?family=Scope+One&display=swap" rel="stylesheet">
  <script src="https://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
  <script src="/js/scroll.js"></script>
  <title>Magnolia</title>

</head> <!-- Cierra head -->

<body>
  <nav class="navbar is-transparent is-fixed-top is-spaced">
    <div class="navbar-brand">
      <a class="navbar-item" href="index.html">
        <img src="img/logo_h_blanco.png" alt="" />
      </a>
      <a role="button" class="navbar-burger burger has-text-light" aria-label="menu" aria-expanded="false"
        data-target="navbar-burger">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbar-burger" class="navbar-menu">
      <div class="navbar-start">
        <a href="/faqs.html" class="navbar-item has-text-light is-size-5">FAQs</a>
        <a href="/productos.html" class="navbar-item has-text-light is-size-5">Productos</a>
        <a href="/faqs.html#como_comprar" class="navbar-item has-text-light is-size-5">Comprar</a>
      </div>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero is-fullheight">
    <div class="hero-body is-paddingless">
      <figure class="image is-fullwidth">
        <img id="img1" src="/img/vaso_vidrio_1_fondo.jpg" alt="">
        <div class="columns is-overlay is-mobile">
          <div class="column is-half centrado-verticalmente">
            <p class="texto-muy-grande has-text-light has-text-centered is-size-1-mobile">Linea GLASS</p>
          </div>
        </div>

      </figure>
    </div>
  </section>
  <br>
  <br>
  <br>
  <!-- Otros productos -->
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-full-mobile is-half-desktop">
        <div class="card">
          <div class="card-image has-text-centered">
            <img src="img/vaso_ceramica.jpg" alt="" />
          </div>
          <div class="card-content">
            <p class="title is-4">Linea Ceramica</p>
            <p class="subtitle is-6">
              Velas en cuencos de cerámica, rústicos y pintorescos, para darle color y aromatizar los rincones. Son la
              opción más elegida!
            </p>
          </div>
        </div>
      </div>
      <div class="column is-full-mobile is-half-desktop">
        <div class="card">
          <div class="card-image has-text-centered">
            <img src="img/llamita_verde.jpg" alt="" />
          </div>
          <div class="card-content">
            <p class="title is-4">Limited Edition</p>
            <p class="subtitle is-6">
              Hermosas velas realizadas en recipientes limitados. Publicaremos en nuestras redes sociales cuando haya
              una edición limitada!
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- Inicio de footer -->
  <footer>
    <div class="option">Terminos y condiciones</div>
    <div class="option">contacto@brand.com</div>
  </footer>
  <!-- Fin de Footer -->

  <!-- Script -->
  <script src="/js/burger-menu.js"></script>
  <script src="https://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>

</body> <!-- Cierra body -->

</html> <!-- Cierra html -->
