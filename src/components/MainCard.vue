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
        <div @click="productView">
          <span class="material-icons heart-icon favorite">
            favorite_border
          </span>
          <b-img :src="product.thumbnail" class="maincard__img m-auto my-4" />
          <b-card-title class="maincard__title text-uppercase">{{
            product.name
          }}</b-card-title>
          <b-card-text class="maincard__text">
            {{ product.desc }}
          </b-card-text>
          <ul class="maincard__specs d-flex mb-4 justify-content-center">
            <li class="me-3">{{ product.specs[0] }}</li>
            <li>{{ product.specs[1] }}</li>
          </ul>
          <h4 class="maincard__price mb-4">${{ product.price }}</h4>
        </div>
        <b-button class="maincard__btn" to="/carrito"
          >Añadir al carrito</b-button
        >
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "MainCard",
  props: {
    products: {
      type: Array,
    },
  },
  computed: {
    ...mapState(["product"]),
  },
  methods: {
    productView() {
      this.$router.push(`/producto/${this.product.id}`);
    },
    ...mapMutations(["getProduct"]),
  },
};
</script>
