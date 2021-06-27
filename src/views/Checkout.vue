<template>
  <div class="check mt-5 mb-4">
    <b-container>
      <b-row class="check">
        <b-col cols="12" class="g-0 mb-2">
          <h2 class="main-title text-center text-md-start mb-4">
            Checkout
          </h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="6">
          <b-row class="text-center mb-4">
            <div class="d-flex justify-content-center justify-content-md-start">
              <span class="material-icons-outlined me-3">
                credit_card
              </span>
              <h3 class="subtitles">Elige un método de pago</h3>
            </div>
            <b-col
              cols="12"
              md="8"
              class="d-flex justify-content-center justify-content-md-start mb-2 g-0"
            >
              <div class="payment">
                <img class="payment__logo" src="/img/webpay.png" />
                <p class="payment__name">Crédito o Débito</p>
              </div>
              <div class="payment">
                <img class="payment__logo" src="/img/paypal.png" />
                <p class="payment__name">Paypal</p>
              </div>
            </b-col>
          </b-row>

          <b-row>
            <div class="d-flex justify-content-center justify-content-md-start">
              <span class="material-icons-outlined me-3">
                toc
              </span>
              <h3 class="subtitles">Su orden</h3>
            </div>
            <b-col
              v-for="(product, i) in shoppingCart"
              :key="i"
              cols="10"
              class="item mb-3 sm-width"
            >
              <div class="item__img">
                <b-img :src="product.img" width="65px" />
              </div>
              <div class="item__info">
                <h3 class="item__info-name" style="font-size: 16px">
                  {{ product.name }}
                </h3>
                <p class="item__info-spec">
                  {{ product.spec }}
                </p>
              </div>

              <div class="item__price">
                <p>${{ product.total }}</p>
              </div>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12" md="6">
          <b-row>
            <b-col cols="12">
              <div
                class="d-flex justify-content-center justify-content-md-start"
              >
                <span class="material-icons-outlined me-3">
                  info
                </span>
                <h3 class="subtitles">Dirección de pago</h3>
              </div>
              <b-form class="register__form sm-width">
                <b-form-group class="mb-3">
                  <b-form-input
                    class="register__form-input"
                    type="text"
                    placeholder="Nombre Completo"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group class="mb-3">
                  <b-form-input
                    class="register__form-input"
                    type="text"
                    placeholder="Dirección"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group class="mb-3">
                  <b-form-input
                    class="register__form-input"
                    type="text"
                    placeholder="Dpto / Oficina / Casa"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  class="mb-3"
                  :description="
                    `Será redirigido a completar el pago en ${method} al continuar.`
                  "
                >
                  <b-form-input
                    class="register__form-input"
                    type="text"
                    placeholder="Teléfono"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-button class="w-100 btn-accent">
                  Continuar a Pagar
                </b-button>
              </b-form>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Checkout",
  data() {
    return {
      method: "la plataforma de su elección",
    };
  },
  computed: {
    ...mapState(["shoppingCart"]),
  },
};
</script>
>
