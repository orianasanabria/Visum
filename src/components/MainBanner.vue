<template>
  <div class="banner my-5 d-flex align-items-center">
    <b-container class="banner__container">
      <div class="banner__info">
        <h2 class="banner__title text-uppercase">Surface Studio</h2>
        <p class="banner__text">
          <span class="fw-bold">
            Subscríbete para ser notificado durante la preventa.
            <!-- Pronto en venta, el estudio creativo definitivo. -->
          </span>
          El estudio creativo definitivo. Herramientas intuitivas y pantalla
          ajustable de 28 pulgadas.
        </p>
        <div
          class="d-flex mt-3 justify-content-center justify-content-md-start"
        >
          <b-form-group>
            <b-form-input
              type="email"
              placeholder="Correo electónico"
            ></b-form-input>
          </b-form-group>
          <b-button class="btn btn-light ms-2">Subscribirme</b-button>
        </div>
      </div>
    </b-container>
    <b-img class="banner__img" src="img/surface.png" />
  </div>
</template>

<script>
export default {
  name: "MainBanner",
};
</script>
