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
              v-for="(product, i) in topSellers"
              :key="i"
              cols="12"
              class="item mb-2"
            >
              <div class="item__img">
                <b-img :src="product.img" />
              </div>
              <div class="item__info">
                <h3 class="item__info-name">{{ product.title }}</h3>
                <p class="item__info-spec">
                  {{ product.specs[1] }}
                </p>
              </div>
              <div class="item__number">
                <b-form-input
                  class="item__number-input"
                  type="number"
                ></b-form-input>
              </div>
              <div class="item__price">
                <p>${{ product.price }}</p>
              </div>
              <div class="item__delete">
                <span class="material-icons">
                  delete
                </span>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" lg="4" class="checkout p-4">
          <div class="checkout__info mt-2 mb-4">
            <h3 class="checkout__info-title">Checkout</h3>
          </div>
          <b-form class="checkout__form">
            <b-form-group class="mb-3" description="Ingrese su nombre">
              <b-form-input
                class="checkout__form-input"
                type="text"
                placeholder="Nombre"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              class="mb-3"
              description="Ingrese su correo electrónico"
            >
              <b-form-input
                class="checkout__form-input"
                type="email"
                placeholder="Correo electónico"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group class="mb-3" description="Ingrese su dirección">
              <b-form-input
                class="checkout__form-input"
                type="text"
                placeholder="Dirección"
                required
              ></b-form-input>
            </b-form-group>
            <b-button
              class="btn-accent checkout__button my-2 mb-3"
              type="submit"
              >Comprar</b-button
            >
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Carrito",
  computed: {
    ...mapState(["topSellers"]),
  },
};
</script>
>
