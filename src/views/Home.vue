<template>
  <div class="home">
    <b-container>
      <!-- Header | Start -->

      <header>
        <b-row class="header-row g-0 d-flex align-items-center m-0 p-0">
          <b-col cols="12" lg="6">
            <transition appear @before-enter="beforeEnter1" @enter="enter">
              <div class="info mb-5">
                <p class="subtitle text-uppercase">All New | Visum</p>
                <h1 class="text-uppercase my-2">Smart Watches</h1>
                <p>El futuro de la salud está en tu muñeca.</p>
                <p class="my-4 price">Desde $49.990</p>
                <b-button
                  href="#categories"
                  class="btn btn-size btn-rounded btn-outlined me-3"
                  >Conoce Más</b-button
                >
                <b-button
                  :to="`/smartwatches`"
                  class="btn btn-size btn-rounded btn-accent"
                  >Ver Todos</b-button
                >
              </div>
            </transition>
            <transition appear @before-enter="beforeEnter1" @enter="enter">
              <div
                class="detail-wrapper px-5 d-flex align-items-center justify-content-end"
              >
                <div class="detail mx-5">
                  <h3 class="detail__title">Quick Pay</h3>
                  <p class="detail__info">
                    Haz pagos seguros solo con tu reloj.
                  </p>
                </div>
                <div class="detail">
                  <h3 class="detail__title">EGC2</h3>
                  <p class="detail__info">
                    Un electro en tu muñeca en todo momento.
                  </p>
                </div>
              </div>
            </transition>
          </b-col>
          <b-col cols="12" lg="6" class="align-items-center">
            <transition appear @before-enter="beforeEnter2" @enter="enter">
              <b-img src="img/watch-bg2.png" class="hero-image pb-5" />
            </transition>
          </b-col>
        </b-row>
      </header>
      <!-- Categories Section | Start -->
      <section
        id="categories"
        class="categories text-uppercase"
        @click="scrollUp"
      >
        <router-link class="categories__item-1" :to="`/${smartwatches.id}`">
          <b-img src="img/samsungwatch.png" alt="Smart Watches" />
          <div class="more more-1 d-none d-lg-flex align-items-center">
            <p class="me-1">
              explorar
            </p>
            <span class="material-icons-outlined">
              arrow_right_alt
            </span>
          </div>
          <h3>Wat-ches</h3>
        </router-link>
        <router-link class="categories__item-2" :to="`/${keyboards.id}`">
          <div class="mt-2">
            <h3>Key-boards</h3>
            <div class="more more-2 d-none d-lg-flex align-items-center">
              <p class="me-1">
                explorar
              </p>
              <span class="material-icons-outlined">
                arrow_right_alt
              </span>
            </div>
          </div>
          <b-img src="img/keychron.png" alt="Smart Watches" />
        </router-link>
        <router-link class="categories__item-3" :to="`/${smartphones.id}`">
          <h3>Smart-Phones</h3>
          <div class="more more-3 d-none d-lg-flex align-items-center">
            <p class="me-1">
              explorar
            </p>
            <span class="material-icons-outlined">
              arrow_right_alt
            </span>
          </div>
          <b-img src="img/samsung.png" alt="Smart Watches" />
        </router-link>
        <router-link class="categories__item-4" :to="`/${notebooks.id}`">
          <b-img src="img/macbook.png" alt="Smart Watches" />
          <div>
            <div class="more more-4 d-none d-lg-flex align-items-center">
              <p class="me-1">
                explorar
              </p>
              <span class="material-icons-outlined">
                arrow_right_alt
              </span>
            </div>
            <h3>Note-books</h3>
          </div>
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
import { mapMutations, mapState } from "vuex";
import MainCard from "@/components/MainCard.vue";
import MainBanner from "@/components/MainBanner.vue";
import gsap from "gsap";
export default {
  name: "Home",
  components: {
    MainCard,
    MainBanner,
  },
  methods: {
    beforeEnter1(el) {
      el.style.opacity = 0;
      el.style.transform = "translateX(-100px)";
    },
    beforeEnter2(el) {
      el.style.opacity = 0;
      el.style.transform = "translateX(100px)";
    },
    enter() {
      gsap.to(".info", {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.2,
      });
      gsap.to(".hero-image", {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.7,
      });
      gsap.to(".detail-wrapper", {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 1,
      });
    },
    scrollUp() {
      window.scrollTo(0, 0);
    },
    ...mapMutations(["buyProduct"]),
  },
  computed: {
    ...mapState([
      "bestSellers",
      "smartwatches",
      "smartphones",
      "notebooks",
      "keyboards",
    ]),
  },
};
</script>
