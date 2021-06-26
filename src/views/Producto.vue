<template>
  <div class="product">
    <b-container>
      <b-row>
        <b-col cols="12" md="6" lg="5" class="product__img">
          <div class="wrapper">
            <img class="wrapper__img" :src="selectedProduct.img" />
          </div>
          <div class="gallery">
            <img
              class="gallery__img"
              v-for="(picture, i) in selectedProduct.gallery"
              :key="i"
              :src="picture"
              @click="getPicture(picture)"
            />
          </div>
          <router-link
            class="goback d-none d-md-flex mt-3"
            :to="`/${$route.params.id}`"
          >
            <span class="material-icons me-2"> west </span>
            Volver
          </router-link>
        </b-col>
        <b-col cols="12" md="6" lg="7" class="product__info my-5">
          <h3 class="categorie">{{ selectedProduct.type }}</h3>
          <h1 class="text-uppercase">{{ selectedProduct.name }}</h1>
          <h3 class="my-3">${{ selectedProduct.price }}</h3>
          <p class="my-3">
            {{ selectedProduct.desc }}
          </p>
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
              class="btn btn-size btn-outlined d-flex align-items-center px-4 me-3"
            @click="toggleFavorite(selectedProduct), heartToggle($event.target, selectedProduct)">
                          <span class="material-icons heart-icon" >
                favorite_border
              </span>
              Favorito
            </button>
            <button class="btn btn-size btn-accent px-5"           @click="
            buyProduct({
              id: selectedProduct.id,
              img: selectedProduct.img,
              name: selectedProduct.name,
              spec: selectedProduct.specs[1],
              price: selectedProduct.price,
            })
          ">
              Añadir al carrito
            </button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "Producto",
  computed: {
    ...mapState(["selectedProduct", "favorites"]),
  },
  methods: {
    heartToggle(target, selectedProduct){
      this.favorites.find(el => {
        if(el.id === selectedProduct.id){
          target.innerHTML = `              <span class="material-icons heart-icon" >
                favorite
              </span>
              Favorito`
          } else {
            target.innerHTML = `              <span class="material-icons heart-icon" >
                favorite_border
              </span>
              Favorito`
        }
      })
    },
    ...mapMutations(["getPicture", "getProduct", "buyProduct"]),
    ...mapActions(["toggleFavorite"])
  },
};
</script>
