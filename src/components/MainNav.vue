<template>
  <b-container
    fluid
    class="fixed-top"
    :class="{ change_color: scrollPosition > 1 }"
  >
    <b-row>
      <b-col cols="12">
        <b-navbar toggleable="md" type="dark" class="py-md-0 px-4">
          <b-navbar-nav class="w-100 flex-row">
            <b-col cols="6" class="align-content-center d-flex">
              <b-navbar-brand class="d-flex align-items-center" to="/">
                <img src="/img/visumlogo.svg" alt="Logo" width="40px" />
              </b-navbar-brand>
            </b-col>
            <b-col cols="6" class="ms-auto d-flex justify-content-end">
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ms-auto d-flex align-items-center">
                  <b-nav-item class="navlink ms-2" to="/">Home</b-nav-item>
                  <b-nav-item class="navlink ms-2" :to="`/${smartwatches.id}`"
                    >SmartWatches</b-nav-item
                  >
                  <b-nav-item class="navlink ms-2" :to="`/${smartphones.id}`"
                    >SmartPhones</b-nav-item
                  >
                  <b-nav-item class="navlink ms-2" :to="`/${notebooks.id}`"
                    >Notebooks</b-nav-item
                  >
                  <b-nav-item class="navlink ms-2" :to="`/${keyboards.id}`"
                    >Keyboards</b-nav-item
                  >
                  <b-nav-item
                    to="/favoritos"
                    class="navlink navlink-fav ms-4 favoritos"
                    active
                  >
                    Wish List
                  </b-nav-item>
                  <b-nav-item to="/carrito" class="navlink cart ms-2" active>
                    <span class="cart__quantity">{{ getQuantity }}</span>
                    <span class="material-icons cart__icon">
                      shopping_cart
                    </span>
                  </b-nav-item>
                </b-navbar-nav>
              </b-collapse>
            </b-col>
          </b-navbar-nav>
        </b-navbar>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "MainNav",
  data() {
    return {
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  computed: {
    ...mapGetters(["getQuantity"]),
    ...mapState(["smartwatches", "smartphones", "notebooks", "keyboards"]),
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>
