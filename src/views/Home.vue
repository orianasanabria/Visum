<template>
  <div class="home">
    <b-container>
      <!-- Header | Start -->
      <header>
        <b-row class="header-row g-0 d-flex align-items-center m-0 p-0">
          <div class="strip-container">
            <div class="left-strip"></div>
          </div>
          <b-col cols="12" lg="6">
            <div class="info mb-5">
              <p class="subtitle text-uppercase">New | Series 6</p>
              <h1 class="text-uppercase my-2">Apple Watch</h1>
              <p>El futuro de la salud está en tu muñeca.</p>
              <p class="my-4 price">Desde $199.990</p>
              <b-button class="btn btn-size btn-rounded btn-outlined me-3"
                >Ver Más</b-button
              >
              <b-button
                @click="getBestSellers()"
                class="btn btn-size btn-rounded btn-accent"
                >Comprar</b-button
              >
            </div>
            <div
              class="detail-wrapper px-5 d-flex align-items-center justify-content-end"
            >
              <div class="detail mx-5">
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
          <b-col cols="12" lg="6" class="align-items-center">
            <b-img src="img/watch-bg2.png" class=" hero-image pb-5" />
          </b-col>
        </b-row>
      </header>
      <!-- Categories Section | Start -->
      <section class="categories text-uppercase">
        <router-link class="categories__item-1" to="/categoria">
          <b-img src="img/samsungwatch.png" alt="Smart Watches" />
          <h3>Wat-ches</h3>
        </router-link>
        <router-link class="categories__item-2" to="/categoria">
          <h3>Key-boards</h3>
          <b-img src="img/keychron.png" alt="Smart Watches" />
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
      <main class="my-5">
        <b-row class="mb-5">
          <b-col cols="12"><h2 class="text-uppercase">Top Sellers</h2></b-col>
        </b-row>
        <MainCard :products="bestSellers" />
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
    ...mapState(["bestSellers"]),
  },
};
</script>
