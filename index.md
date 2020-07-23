<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="utf-8">
  <meta name="description" content="Sitio contruido con BULMA CSS para reto 4">

  <link rel="stylesheet" href="./css/estilos.css">
  <link rel="stylesheet" href="./bulma-0.9.0/css/bulma.min.css">
  <link rel="stylesheet" href="./css/animations.css">

  <link href="https://fonts.googleapis.com/css2?family=Scope+One&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet">

  <script src="https://kit.fontawesome.com/f7fe0cc5ec.js" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
  <script src="./js/scroll.js"></script>

  <title>Magnolia</title>
</head>

<body>
  <nav class="navbar is-transparent is-fixed-top is-spaced">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="./index.html">
          <img src="./img/logo_h_blanco.png" alt="" width="100" />
        </a>
        <a role="button" class="navbar-burger burger has-text-light" aria-label="menu" aria-expanded="false"
          data-target="navbar-burger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbar-burger" class="navbar-menu has-text-light">
        <div class="navbar-start" id="links">
          <a href="./productos.html" class="navbar-item  is-size-5 has-text-light">Productos</a>
          <a href=" ./faqs.html" class="navbar-item  is-size-5 has-text-light">FAQs</a>
          <a href="./faqs.html#como_comprar" class="navbar-item  is-size-5 has-text-light">Comprar</a>
        </div>
      </div>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero is-fullheight">
    <div class="hero-body is-paddingless">
      <figure class="image is-fullwidth">
        <img id="img1" src="./img/vaso_vidrio_1_fondo.jpg" alt="">
        <div class="columns is-overlay is-mobile">
          <div class="column is-half centrado-verticalmente">
            <p class="texto-muy-grande has-text-light has-text-centered is-size-1-mobile">Linea GLASS</p>
          </div>
        </div>
      </figure>
    </div>
  </section>

  <!-- SECCION ENVIO GRATIS -->
  <section>
    <div class="hero is-fullheight">
      <div class="hero-body is-paddingless">
        <figure class="image is-fullwidth">
          <img src="./img/enviogratis.jpg" alt="">
        </figure>
      </div>
    </div>
  </section>

  <!-- SECCION DESTACADOS -->
  <div class="container">
    <div class="box">
      <h1 class="title has-text-centered ">DESTACADOS</h1>
    </div>
    <div class="columns is-centered is-vcentered mb-2">
      <div class="column is-full-mobile is-half-desktop">
        <div class="box">
          <a href="productos.html">
          <figure class="image"><img src="./img/vaso_ceramica.jpg" alt="" /></figure>
          <p class="title is-4 mt-2">Linea Ceramica</p>
          <p class="subtitle is-6">
            Velas en cuencos de cerámica, rústicos y pintorescos, para darle color y aromatizar los rincones. Son la
            opción más elegida!
          </p>
          </a>
        </div>
      </div>
      <div class="column is-full-mobile is-half-desktop">
        <div class="box">
          <a href="productos.html">
            <figure class="image"><img src="./img/llamita_verde.jpg" alt="" /></figure>
            <p class="title is-4 mt-4">Limited Edition</p>
            <p class="subtitle is-6">
              Hermosas velas realizadas en recipientes limitados. Publicaremos en nuestras redes sociales cuando haya
              una edición limitada!
            </p>
            </a>
        </div>
      </div>
    </div>
  </div>

  <footer class="footer has-background-black-ter">
    <div class="columns">
      <div class="column is-3 has-text-light has-text-centered">
        <i class=" far fa-copyright"></i>
        <span>Francisco Fourcade 2020</span>
      </div>
      <div class="column has-text-centered">
        <img src="./img/logo_h_blanco.png" alt="" width="150">
      </div>
      <div class="column is-3 has-text-light has-text-centered">
        <i class="fas fa-tasks"></i>
        <span>Reto 4 - Programacion 2 - 2020</span>
      </div>
    </div <div class="columns">
    <div class="column has-text-centered"><a class=" subtitle has-text-light" href="./terminos.html">Términos y
        Condiciones</a>
    </div>
    <div class="column is-12 has-text-centered">
      <a href="https://bulma.io/" target="_blank"><img src="./img/made-with-bulma.png" alt="" width="150"></a>
    </div>
    </div>
    </div>
  </footer>

  <script src="./js/burger-menu.js"></script>
  <script src="https://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
</body>

</html>
