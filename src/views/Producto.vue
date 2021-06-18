<template>
  <div class="product">
    <b-container>
      <b-row>
        <b-col cols="12" md="6" lg="5" class="product__img">
          <div class="wrapper">
            <img class="wrapper__img" src="img/xi1.jpg" />
          </div>
          <div class="gallery">
            <img class="gallery__img" src="img/xi1.jpg" />
            <img class="gallery__img" src="img/xi1.jpg" />
            <img class="gallery__img" src="img/xi1.jpg" />
          </div>
        </b-col>
        <b-col cols="12" md="6" lg="7" class="product__info my-5">
          <h3 class="categorie">SmartPhones</h3>
          <h1>Xiaomi Mi 11</h1>
          <h3 class="my-3">$99.990</h3>
          <p class="my-3">
            Pantalla de 6.8 puldagas AMOLED DotDisplay. Potencia y rendimiento
            con Qualcomm Snapdragon 888.
          </p>
          <ul class="specs">
            <li class="specs__item">10MP</li>
            <li class="specs__item">256GB</li>
          </ul>
          <div class="d-flex buttons mt-3">
            <button
              class="btn btn-size btn-outlined d-flex align-items-center px-4 me-3"
            >
              <span class="material-icons heart-icon">
                favorite_border
              </span>
              Favorito
            </button>
            <button class="btn btn-size btn-accent px-5">
              Añadir al carrito
            </button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Producto",
};
</script>
