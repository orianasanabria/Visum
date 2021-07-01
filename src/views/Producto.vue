<template>
  <div class="product">
    <b-container class="margin-nav pt-3">
      <b-row>
        <b-col cols="12" md="6" lg="5" class="product__img">
          <div class="wrapper">
            <img
              class="wrapper__img"
              v-if="pic === ''"
              :src="selectedProduct.img"
            />
            <img class="wrapper__img" v-else :src="pic" />
          </div>
          <div class="gallery">
            <img
              class="gallery__img"
              v-for="(picture, index) in selectedProduct.gallery"
              :key="index"
              :src="picture"
              @click="getPic(picture, index)"
            />
          </div>
          <router-link
            class="goback d-none d-md-flex mt-3"
            :to="`/${selectedProduct.categorie}`"
          >
            <span class="material-icons me-2"> west </span>
            Volver
          </router-link>
        </b-col>
        <b-col cols="12" md="6" lg="7" class="product__info my-5">
          <h3 class="categorie">{{ selectedProduct.categorie }}</h3>
          <h1 class="text-uppercase mb-3">{{ selectedProduct.name }}</h1>
          <h3 class="categorie categorie-sm">Precio</h3>
          <h3 class="mb-3">${{ getNewPrice }}</h3>
          <p class="mb-4">
            {{ selectedProduct.desc }}
          </p>
          <h3 class="categorie categorie-sm">Especificaciones</h3>
          <ul class="specs">
            <li
              class="specs__item"
              v-for="(spec, i) in selectedProduct.specs"
              :key="i"
            >
              {{ spec }}
            </li>
          </ul>
          <div class="d-flex buttons mt-3">
            <button
              ref="fav"
              class="btn btn-size btn-outlined d-flex align-items-center px-4 me-3"
              @click="
                toggleFavorite(selectedProduct),
                  heartToggle($refs.fav, selectedProduct)
              "
            >
              <span class="material-icons">
                favorite_border
              </span>
            </button>
            <button
              class="btn btn-size btn-accent px-5"
              @click="
                buyProduct({
                  id: selectedProduct.id,
                  img: selectedProduct.img,
                  name: selectedProduct.name,
                  spec: selectedProduct.specs[1],
                  price: selectedProduct.price,
                })
              "
            >
              Añadir al carrito
            </button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from "vuex";
export default {
  name: "Producto",
  computed: {
    ...mapGetters(["getNewPrice"]),
    ...mapState(["selectedProduct", "favorites"]),
  },
  data() {
    return {
      pic: "",
    };
  },
  methods: {
    getPic(picture, index) {
      this.pic = this.selectedProduct.gallery[index];
    },
    heartToggle(target, selectedProduct) {
      this.favorites.find((el) => {
        if (el.id === selectedProduct.id) {
          target.innerHTML = `<span class="material-icons">favorite</span>`;
        } else {
          target.innerHTML = `<span class="material-icons">favorite_border</span>`;
        }
      });
    },
    ...mapMutations(["getProduct", "buyProduct"]),
    ...mapActions(["toggleFavorite"]),
  },
};
</script>
