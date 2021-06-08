<template>
  <b-container>
    <b-navbar toggleable="sm" type="dark" class="py-0">
      <b-navbar-nav class="d-flex justify-content-between w-100">
        <b-navbar-brand class="logo p-3 px-4" to="/">Ø</b-navbar-brand>
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
            <b-nav-item to="/carrito" class="navlink ms-4" active>
              <span class="material-icons">
                shopping_cart
              </span>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar-nav>
    </b-navbar>
  </b-container>
</template>

<script>
export default {
  name: "MainNav",
};
</script>

<style lang="scss" scoped></style>
