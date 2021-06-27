<template>
  <b-row>
    <b-col
      cols="12"
      md="6"
      lg="3"
      class="mb-4"
      v-for="(product, i) in products"
      :key="i"
      @click="getProduct(product)"
    >
      <div class="favoritescard text-center">
        <span
          class="material-icons heart-icon favorite green-border"
          @click="toggleFavorite(product), heartToggle($event.target, product)"
          >favorite
        </span>
        <router-link :to="`/producto/${product.id}`">
          <b-img :src="product.img" class="favoritescard__img m-auto my-4" />
          <b-card-title class="favoritescard__title text-uppercase">{{
            product.name
          }}</b-card-title>
          <b-card-text class="favoritescard__text">
            {{ product.desc }}
          </b-card-text>
          <h4 class="favoritescard__price mb-4">${{ product.price }}</h4>
        </router-link>
        <b-button
          class="favoritescard__btn"
          @click="
            buyProduct({
              id: product.id,
              img: product.img,
              name: product.name,
              spec: product.specs[1],
              price: product.price,
            })
          "
          >Añadir al carrito</b-button
        >
      </div>
    </b-col>
    <router-view></router-view>
  </b-row>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "FavoritesCard",
  props: {
    products: {
      type: Array,
    },
  },
  computed: {
    ...mapState(["favorites"]),
  },
  methods: {
    heartToggle(target, product) {
      this.favorites.find((el) => {
        if (el.id !== product.id) {
          target.textContent = "favorite";
        } else {
          target.textContent = "favorite_border";
        }
      });
    },
    ...mapMutations(["getProduct", "buyProduct"]),
    ...mapActions(["toggleFavorite"]),
  },
};
</script>
