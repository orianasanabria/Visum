<template>
  <div class="home">
    <b-container>
      <div class="left-strip"></div>
      <!-- Header | Start -->
      <header>
        <b-row style="height:90vh" class="ms-5 d-flex align-items-center">
          <b-col cols="12" md="6">
            <div class="info mb-5">
              <p class="subtitle text-uppercase">New | Series 6</p>
              <h1 class="text-uppercase my-2">Apple Watch</h1>
              <p>El futuro de la salud está en tu muñeca.</p>
              <p class="my-4 price">Desde $199.990</p>
              <b-button class="btn btn-size btn-outlined me-3"
                >Ver Más</b-button
              >
              <b-button class="btn btn-size btn-accent">Comprar</b-button>
            </div>
            <div class="details px-5 d-flex align-items-center">
              <div class="detail mx-5 px-4">
                <h3 class="detail__title">Apple Pay</h3>
                <p class="detail__info">Haz pagos seguros solo con tu reloj.</p>
              </div>
              <div class="detail">
                <h3 class="detail__title">EGC2</h3>
                <p class="detail__info">
                  Un electro en tu muñeca en todo momento.
                </p>
              </div>
            </div>
          </b-col>
          <b-col cols="12" md="6">
            <!-- <b-img
              src="img/hero.png"
              class="hero-img img-fluid"
              style="height:640px;width:640px;"
            /> -->
            <b-img
              src="img/watch-bg2.png"
              class="mt-5 pt-3 hero-img img-fluid"
              width="720px"
            />
          </b-col>
        </b-row>
      </header>
      <!-- Categories Section | Start -->
      <section class="categories text-uppercase mb-5">
        <router-link class="categories__item-1" to="/categoria">
          <b-img src="img/samsungwatch.png" alt="Smart Watches" />
          <h3>Wat-ches</h3>
        </router-link>
        <router-link class="categories__item-2" to="/categoria">
          <b-img src="img/keychron.png" alt="Smart Watches" />
          <h3>Key-boards</h3>
        </router-link>
        <router-link class="categories__item-3" to="/categoria">
          <h3>Smart-Phones</h3>
          <b-img src="img/samsung.png" alt="Smart Watches" />
        </router-link>
        <router-link class="categories__item-4" to="/categoria">
          <b-img src="img/macbook.png" alt="Smart Watches" />
          <h3>Note-books</h3>
        </router-link>
      </section>
      <!-- Top Sellers | Start -->
      <main class="mb-5">
        <b-row class="mb-5">
          <b-col cols="12"><h2 class="text-uppercase">Top Sellers</h2></b-col>
        </b-row>
        <MainCard :topSellers="topSellers" />
      </main>
    </b-container>
    <!-- Banner | Start -->
    <section>
      <b-row>
        <b-col cols="12">
          <MainBanner />
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MainCard from "@/components/MainCard.vue";
import MainBanner from "@/components/MainBanner.vue";
export default {
  name: "Home",
  components: {
    MainCard,
    MainBanner,
  },
  computed: {
    ...mapState(["topSellers"]),
  },
};
</script>

<style lang="scss" scoped></style>
