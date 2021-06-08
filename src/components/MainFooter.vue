<template>
  <b-container>
    <div class="top-strip"></div>
    <div
      class="footer py-0 d-flex justify-content-between align-items-center w-100"
    >
      <p class="copy">
        Copyright © 2021 | Todos los derechos reservados.
      </p>
      <router-link class="logo p-3 px-4 m-0" to="/">Ø</router-link>
    </div>
  </b-container>
  <!-- <b-navbar-nav class="d-flex justify-content-between w-100">
        <b-navbar-nav class="me-auto d-flex align-items-center">
          <p class="nav-link">
            Copyright © 2021 | Todos los derechos reservados.
          </p>
        </b-navbar-nav>
        <b-navbar-brand class="logo p-3 px-4 m-0" to="#">Ø</b-navbar-brand>
        <div class="top-strip"></div>
      </b-navbar-nav> -->
</template>

<script>
export default {
  name: "MainNav",
};
</script>

<style lang="scss" scoped>
.logo {
  background-color: #ff4b26;
}
.copy {
  font-size: 0.8rem;
  color: gray;
}

.top-strip {
  width: 100%;
  height: 1px;
  background: #fff;
  opacity: 0.5;
}
</style>
