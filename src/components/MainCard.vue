<template>
  <b-row>
    <b-col
      cols="12"
      md="6"
      lg="4"
      class="mb-4"
      v-for="(product, i) in products"
      :key="i"
      @click="getProduct(product)"
    >
      <div class="maincard text-center">
        <span
          class="material-icons heart-icon favorite green-border"
          @click="toggleFavorite(product)"
          >favorite_border
        </span>
        <router-link :to="`/${product.categorie}/${product.id}`">
          <b-img :src="product.img" class="maincard__img m-auto my-4" />
          <b-card-title class="maincard__title text-uppercase">{{
            product.name
          }}</b-card-title>
          <b-card-text class="maincard__text">
            {{ product.desc }}
          </b-card-text>
          <ul class="maincard__specs d-flex mb-4 justify-content-center">
            <li class="mx-1" v-for="(spec, i) in product.specs" :key="i">
              {{ spec }}
            </li>
          </ul>
          <h4 class="maincard__price mb-4">${{ newPrice(product) }}</h4>
        </router-link>
        <b-button
          class="maincard__btn"
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
  name: "MainCard",
  props: {
    products: {
      type: Array,
    },
  },
  computed: {
    ...mapState(["favorites"]),
  },
  methods: {
    newPrice(product) {
      const newPrice = product.price
        .toLocaleString()
        .replace(",", ".")
        .replace(",", ".");
      return newPrice;
    },
    ...mapMutations(["getProduct", "buyProduct"]),
    ...mapActions(["toggleFavorite"]),
  },
};
</script>
