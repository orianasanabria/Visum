<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <b-navbar toggleable="md" type="dark" class="p-0">
          <b-navbar-nav class="w-100 flex-row">
            <b-col cols="6" class="align-content-center d-flex">
              <b-navbar-brand class="logo" to="/">Ø</b-navbar-brand>
            </b-col>
            <b-col cols="6" class="ms-auto d-flex justify-content-end">
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ms-auto d-flex align-items-center">
                  <b-nav-item class="navlink ms-2" to="/">Home</b-nav-item>
                  <b-nav-item class="navlink ms-2" to="/categoria"
                    >SmartWatches</b-nav-item
                  >
                  <b-nav-item class="navlink ms-2" to="/categoria"
                    >SmartPhones</b-nav-item
                  >
                  <b-nav-item class="navlink ms-2" to="/categoria"
                    >Notebooks</b-nav-item
                  >
                  <b-nav-item class="navlink ms-2" to="/categoria"
                    >Keyboards</b-nav-item
                  >
                  <b-nav-item to="/favoritos" class="navlink ms-4" active>
                    <span class="material-icons">
                      favorite_border
                    </span>
                  </b-nav-item>
                  <b-nav-item to="/carrito" class="navlink ms-2" active>
                    <span class="material-icons">
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
export default {
  name: "MainNav",
};
</script>
