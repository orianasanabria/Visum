<template>
  <b-row>
    <b-col
      cols="12"
      lg="4"
      class="mb-4"
      v-for="(product, i) in topSellers"
      :key="i"
    >
      <div class="maincard text-center">
        <b-img :src="product.img" class="maincard__img m-auto my-4" />
        <b-card-title class="maincard__title text-uppercase">{{
          product.title
        }}</b-card-title>
        <b-card-text class="maincard__text my-2">
          {{ product.desc }}
        </b-card-text>
        <ul class="maincard__specs d-flex justify-content-center">
          <li class="me-3">{{ product.specs[0] }}</li>
          <li>{{ product.specs[1] }}</li>
        </ul>
        <h4 class="maincard__price my-4">${{ product.price }}</h4>
        <!-- <b-button class="maincard__btn">Añadir al carrito</b-button> -->
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "MainCard",
  props: {
    topSellers: {
      type: Array,
    },
  },
};
</script>
