<template>
  <div class="carrito margin-nav">
    <b-container>
      <b-row>
        <b-col cols="12" class="mt-3">
          <h2 class="cart-title mb-4">Carrito de compras</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" lg="8" class="pe-4">
          <b-row v-if="shoppingCart.length !== 0">
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
                <p>${{ newPrice(product) }}</p>
              </div>
              <div class="item__delete" @click="deleteProduct(product)">
                <span class="material-icons">
                  delete
                </span>
              </div>
            </b-col>
          </b-row>
          <b-row v-else class="mb-5">
            <b-col cols="12" class="item mb-2">
              <div class="item__info w-100 d-flex align-items-center">
                <span class="material-icons-outlined me-3"> info </span>
                <h3 class="item__info-name py-4">Tu carrito está vacío</h3>
              </div>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12" lg="4" class="checkout p-4">
          <div class="checkout__info mt-2 mb-4">
            <h3 class="checkout__info__title mb-4">Resumen</h3>
          </div>
          <div class="d-flex checkout__cupon">
            <b-form-group class="checkout__cupon__input mb-2">
              <b-form-input
                v-bind:class="{ wrongCoupon: error }"
                type="text"
                placeholder="Añadir cupón de descuento"
                v-model="couponInput"
              ></b-form-input>
            </b-form-group>
            <b-button
              @click="getDiscount()"
              class="btn-accent-outline checkout__cupon__btn"
              >Aplicar</b-button
            >
          </div>
          <p class="coupon-message mb-3">
            {{ message }}
          </p>
          <div class="checkout__total my-3">
            <p class="mt-2">Subtotal</p>
            <p class="mt-2">${{ getSubtotal }}</p>
          </div>
          <div v-show="couponDiscount !== 0" class="checkout__total my-3">
            <p class="mt-2">Descuentos</p>
            <p class="mt-2">- ${{ couponDiscount }}</p>
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
import { mapMutations, mapState, mapGetters } from "vuex";
export default {
  name: "Carrito",
  data() {
    return {
      couponInput: "",
      couponDiscount: 0,
      error: false,
      message: "Ingrese un cupón de descuento.",
    };
  },
  computed: {
    ...mapState(["shoppingCart", "coupons"]),
    ...mapGetters(["getSubtotal"]),
  },
  methods: {
    getDiscount() {
      const coupon = this.coupons;
      if (!coupon) return;
      coupon.filter((el) => {
        if (el.code === this.couponInput) {
          this.couponDiscount = el.discount;
          this.error = false;
          this.message = "Descuento aplicado exitosamente.";
        } else {
          this.error = true;
          this.message =
            "El cupón ingresado no existe o ha expirado. Intente de nuevo.";
        }
      });
    },
    newPrice(product) {
      const newPrice = product.total
        .toLocaleString()
        .replace(",", ".")
        .replace(",", ".");
      return newPrice;
    },
    ...mapMutations(["deleteProduct"]),
  },
};
</script>
>

<style scoped>
.coupon-message {
  font-size: 0.8rem;
  color: gray;
}
.wrongCoupon {
  border: 2px solid rgb(236, 82, 82);
}
</style>
