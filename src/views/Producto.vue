<template>
  <div class="product">
    <b-container>
      <b-row>
        <b-col cols="12" md="6" lg="5" class="product__img">
          <div class="wrapper">
            <img class="wrapper__img" :src="product.thumbnail" />
          </div>
          <div class="gallery">
            <img
              class="gallery__img"
              v-for="(picture, i) in product.gallery"
              :key="i"
              :src="picture"
            />
          </div>
        </b-col>
        <b-col cols="12" md="6" lg="7" class="product__info my-5">
          <h3 class="categorie">{{ product.type }}</h3>
          <h1 class="text-uppercase">{{ product.name }}</h1>
          <h3 class="my-3">${{ product.price }}</h3>
          <p class="my-3">
            {{ product.desc }}
          </p>
          <ul class="specs">
            <li class="specs__item" v-for="(spec, i) in product.specs" :key="i">
              {{ spec }}
            </li>
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
import { mapState } from "vuex";
export default {
  name: "Producto",
  computed: {
    ...mapState(["product"]),
  },
};
</script>
