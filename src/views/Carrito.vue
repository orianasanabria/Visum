<template>
  <div class="carrito my-5">
    <b-container>
      <b-row>
        <b-col cols="12">
          <h2 class="cart-title mb-4">Carrito de compras</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" lg="8" class="pe-4">
          <b-row>
            <b-col
              v-for="(product, i) in shoppingCart"
              :key="i"
              cols="12"
              class="item mb-2"
            >
              <div class="item__img">
                <b-img :src="product.img" />
              </div>
              <div class="item__info">
                <h3 class="item__info-name">{{ product.name }}</h3>
                <p class="item__info-spec">
                  {{ product.spec }}
                </p>
              </div>
              <div class="item__number">
                <b-form-input
                  class="item__number-input"
                  type="number"
                  :value="product.quantity"
                ></b-form-input>
              </div>
              <div class="item__price">
                <p>${{ product.total }}</p>
              </div>
              <div class="item__delete" @click="deleteProduct(product)">
                <span class="material-icons">
                  delete
                </span>
              </div>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12" lg="4" class="checkout p-4">
          <div class="checkout__info mt-2 mb-4">
            <h3 class="checkout__info__title mb-4">Resumen</h3>
          </div>
          <div class="mb-3 d-flex checkout__cupon">
            <b-form-group class="checkout__cupon__input mb-2">
              <b-form-input
                type="text"
                placeholder="Añadir cupón de descuento"
              ></b-form-input>
            </b-form-group>
            <b-button class="btn-accent-outline checkout__cupon__btn"
              >Aplicar</b-button
            >
          </div>
          <div class="checkout__total my-3">
            <p class="mt-2">Subtotal</p>
            <p class="mt-2">$90.999</p>
          </div>
          <b-button to="/login" class="btn-accent checkout__button my-2 mb-3"
            >Continuar</b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Carrito",
  computed: {
    ...mapState(["shoppingCart"]),
  },
  methods: {
    ...mapMutations(["deleteProduct"]),
  },
};
</script>
>
